'use client'

import axios from "axios";
import { useEffect } from "react";

export default function Basket(){
    async function getBasketItems(){
       
        const response = await axios
			.post(`https://api.lichi.com/cart/list?lang=1&shop=1`, {
				withCredentials: true,
				headers: {
					'Cookie': 'SID=SID.1687172446727.8218383-0',
					'Access-Control-Allow-Origin': 'https://api.lichi.com'
				},
			})
			.then((response) => {
				// не приходят данные товаров, которые были добавлены в корзину
				console.log(response);
			})
			.catch(err=>console.log(err))
    }
    useEffect(()=>{
        getBasketItems()
    },[])
    return (
        <h1>Basket page</h1>
    )
}