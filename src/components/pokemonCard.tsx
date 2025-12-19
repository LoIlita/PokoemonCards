const sizeVariants = {
  sm: "w-32 h-48",
  md: "w-48 h-72",
  lg: "w-64 h-96",
} as const;

const scaleVariants = {
  scaleUp: "hover:scale-120 transform transition-transform duration-300",
} as const;

const priceMode = {
  enabled: `hover:opacity-10 transition-opacity duration-300`,
} as const;

type PokemonCardProps = {
  src: string;
  alt: string;
  scale?: keyof typeof scaleVariants;
  size?: keyof typeof sizeVariants;
  price?: boolean;
};

export default function PokemonCard({
  src,
  alt,
  scale,
  size = "md",
  price = false,
}: PokemonCardProps) {
  return (
    <div
      className={[
        sizeVariants[size],
        scale && scaleVariants[scale],
        price && priceMode.enabled,
        "m-2 overflow-hidden rounded-lg",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img src={src} alt={alt} className="w-full h-full " />
    </div>
  );
}

// dojdzie cena i procenty
