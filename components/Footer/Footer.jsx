import Image from "next/image";
import React from "react";

import logo from "../../public/img/logo.png";

import footer from "@/app/styles/footer.module.scss";

export default function Footer() {
	return (
		<footer className={footer.footer}>
			<Image
				src={logo}
				alt='footer-copy'
			/>
			<span className='footer__copy-text'>— All rights reserved</span>
		</footer>
	);
}
