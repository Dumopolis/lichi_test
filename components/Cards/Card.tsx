import Image, { StaticImageData } from "next/image";

type Props = {
	id: number;
	title: string;
	image: StaticImageData;
	description: string;
};

export default function Card({ id, title, image, description }: Props) {
	return (
		<div>
			<h3>{title}</h3>
			<Image src={image} alt={title} />
			<p>{description}</p>
		</div>
	);
}
