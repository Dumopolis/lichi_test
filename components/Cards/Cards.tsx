"use client";

import Card from "./Card";
import dress from '@/public/img/dress.jpg'
export default function Cards() {
	const items = [
		{
			id: 1,
			title: "Dress",
			image: dress,
			description: "dress tralala dress tralala dress tralala dress tralala",
		},
		{
			id: 2,
			title: "T-short",
			image: dress,
			description: "dress tralala dress tralala dress tralala dress tralala",
		},
		{
			id: 3,
			title: "Shirt",
			image: dress,
			description: "dress tralala dress tralala dress tralala dress tralala",
		},
		{
			id: 4,
			title: "Dress",
			image: dress,
			description: "dress tralala dress tralala dress tralala dress tralala",
		},
	];
	return (
    <div>
        {items.map((item)=><Card key={item.id} {...item}/>)}
    </div>
    );
}
