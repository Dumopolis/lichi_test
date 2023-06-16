"use client";
import header from "@/app/styles/header.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function BurgerMenu() {

  const [burgerToggler, setBurgerToggler] = useState(false)

	return (
			<div onClick={()=>setBurgerToggler(!burgerToggler)}
				className={`${header.burgerMenu} 
        ${burgerToggler ? header.burgerMenu_opened : ''}`}>

				<div className={header.burgerMenu__button}>
					<div />
				</div>

				<div className={header.burgerMenu__links}>
					<Link href='/'>Главная</Link>
					<Link href='/about'>О нас</Link>
					<Link href='/catalog'>Каталог</Link>
					<Link href='/basket'>Корзина</Link>
				</div>
			</div>

	);
}
