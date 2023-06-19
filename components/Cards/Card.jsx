'use client'

import cards from '@/app/styles/cards.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper';


import 'swiper/css';
import 'swiper/css/effect-fade';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Card({ name, photos, sizes, brand_name, format_price }) {
	const [sizeId, setSizeId] = useState('')
	const sizesArr = Object.values(sizes)

	async function addToBasket(id) {
		
		const response = await axios
			.post(`https://api.lichi.com/cart/add?lang=1&shop=1&id=${id}`, {
				withCredentials: true,
				headers: {
					'Cookie': 'SID=SID.1687172446727.8218383-0',
					'Access-Control-Allow-Origin': 'https://api.lichi.com'
				},
			})
			.then((response) => {
				console.log(response);
			})
			.catch(err=>console.log(err))
	}
	

	return (
		<div className={cards.card}>
			<h3>{name} {brand_name}< br />
				{format_price[1]}
			</h3>
			<Swiper modules={[Controller]}
				effect="fade"
				watchSlidesProgress
				navigation>
				{photos.map((photo) => {
					return (
						<SwiperSlide key={photo.big}>
							<img src={photo.big} alt={name} />
						</SwiperSlide>);
				})}
			</Swiper>
			<div className={cards.controls}>
				<button onClick={() => addToBasket(sizeId)}>Добавить<br />в корзину</button>
				<select value={sizeId} onChange={(e) => { setSizeId(e.target.value) }}>
					<option value='' disabled>Размер</option>
					{sizesArr.map((size) => <option key={size.id} value={size.id}>{size.name}</option>)}
				</select>

			</div>
		</div>
	);
}
