const sizeVariants = {
	sm: "w-32 h-48",
	md: "w-48 h-72",
	lg: "w-64 h-96",
} as const;

const scaleVariants = {
	scaleUp: "hover:scale-110 transform transition-transform duration-300",
} as const;

const opacityMode = {
	on: `hover:opacity-10 transition-opacity duration-300`,
} as const;

enum CardType {
	BUG = "BUG",
	FIRE = "FIRE",
	WATER = "WATER",
	ELECTRIC = "ELECTRIC",
}

type PokemonCardProps = {
	src: string;
	alt: string;
	className?: string;
	scale?: keyof typeof scaleVariants;
	size?: keyof typeof sizeVariants;
	price?: boolean;
	type: CardType;
};

export default function PokemonCard({
	src,
	alt,
	type = CardType.FIRE,
	scale,
	size = "md",
	price = false,
	className,
}: PokemonCardProps) {
	return (
		<div
			className={[
				sizeVariants[size],
				scale && scaleVariants[scale],
				price && opacityMode.on,
				"m-2 overflow-hidden rounded-lg",
				className,
				type,
			]
				.filter(Boolean)
				.join(" ")}
		>
			<img src={src} alt={alt} className='w-full h-full ' />
		</div>
	);
}

export { PokemonCardProps, CardType };

// dojdzie cena i procenty
