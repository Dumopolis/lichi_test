import Image from "next/image";
import Link from "next/link";

import BurgerMenu from "./BurgerMenu";

import logo from "../../public/img/logo.png";
import header from "@/app/styles/header.module.scss";

export default function Header() {
	return (
		<header className={header.header}>
			<nav className={header.nav}>
				<Link href='/'>
					<Image src={logo} className={header.logo} alt='logo' />
				</Link>
				<div className={header.desktopMenu}>
					<Link href='/'>Главная</Link>
					<Link href='/about'>О нас</Link>
					<Link href='/catalog'>Каталог</Link>
					<Link href='/basket'>Корзина</Link>
				</div>
				<BurgerMenu />
			</nav>
		</header>
	);
}
