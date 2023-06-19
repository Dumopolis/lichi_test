"use client";

import { useEffect, useState } from "react";

import cards from '@/app/styles/cards.module.scss'

import axios from "axios";
import Card from "./Card";

export default function Cards() {

	const [carts, setCarts] = useState([])

	async function getCart(iD) {
	
		const response = await axios
			.post(`https://api.lichi.com/product/get_product_detail?lang=1&shop=1&id=${iD}`, {
				withCredentials: true,
				headers: {
					'Cookie': 'SID=SID.1687172446727.8218383-0',
					'Access-Control-Allow-Origin': 'https://api.lichi.com'
				},
			})
			.then((response) => {
				console.log(response);
				return response.data.api_data.aData
			})
			.then(({ id, category_name: name, brand_name, photos, sizes, descriptions, format_price }) => {
				const cart = { id, name,brand_name, photos, sizes, descriptions, format_price }
				return cart
			})

			.catch((error) => {
				console.error(error);
			});

		return response
	}
	async function setCustom() {
		const firstCart = getCart(45340).then((data) => data)
		const seconCart = getCart(45465).then((data) => data)
		Promise.all([firstCart, seconCart]).then((data) => {
			const dataX4 = [...data, ...data, ...data, ...data]
			setCarts(dataX4)
		})

	}
	useEffect(() => {
		setCustom()
	}, []);

	useEffect(() => {
		// getCart(45465).then((data)=>setCarts([...carts, data]))

	}, [carts])

	return (
		<div className={cards.cards}>
			{carts.length ? carts.map((item) => {
				console.log(item);
				return <Card key={item.id} {...item} />
			}): <h1>Loading...</h1>}
		</div>
	);
}
