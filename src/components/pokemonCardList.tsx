import PokemonCard, { type PokemonCardProps } from "./pokemonCard";
import { cards } from "./dataCard";

type PokemonCardListProps = {
    cardProps?: PokemonCardProps;
    className?: string;
};

export default function PokemonCardList({ cardProps, className }: PokemonCardListProps) {
    const filteredCards = cardProps?.type
        ? cards.filter((c) => c.type === cardProps.type)
        : cards;

    return (
        <div className={className}>
            {filteredCards.map((card) => (
                <PokemonCard
                    key={card.key}
                    src={card.src}
                    alt={card.alt}
                    type={card.type}
                    {...cardProps}
                />
            ))}
        </div>
    );
}