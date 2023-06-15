import Image from "next/image";
import Link from "next/link";

import logo from "../public/img/logo.jpg";

import "./header.module.scss"

export default function Header() {
	return (
		<header className='header'>
			<nav className='nav'>
				<Link href='/'>
					<Image src={logo} className='nav__logo' alt='logo' />
				</Link>
				<div className='desktop-menu'>
					<Link className='nav__link' href='/about'>
						О нас
					</Link>
					<Link className='nav__link' href='/catalog'>
						Каталог
					</Link>
					<Link className='nav__link' href='/basket'>
						Корзина
					</Link>
				</div>
				<div className='burger-menu'>
					<div className='burger-menu__button'>
						<span className='burger-menu__button__center-line' />
					</div>
					<div className='burger-menu__links'>
						<Link className='nav__link' href='/about'>
							О нас
						</Link>
						<Link className='nav__link' href='/catalog'>
							Каталог
						</Link>
						<Link className='nav__link' href='/basket'>
							Корзина
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
}
