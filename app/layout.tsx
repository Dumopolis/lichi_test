import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.css";
import layout from '@/app/styles/layout.module.scss'


export const metadata = {
	title: "LICHI - Online fashion store",
	description:
		"Магазин модной одежды Lichi. Мы предлагаем десятки дизайнов одежды каждую неделю, наша одежда уникальна и каждый новый дизайн отражает последние тенденции моды.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<Header />
				<main className={layout.main}>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
