import ParseCardType from "../../components/parseCardType";
import PokemonCard from "../../components/pokemonCard";
import PokemonCardList from "../../components/pokemonCardList";
import useDrawRandomCard from "../../hooks/useDrawCard";

export default function Case() {
  const cardType = ParseCardType();
  const { drawnCard, drawRandomCard } = useDrawRandomCard();

  return (
    <div>
      <div className=" flex flex-col items-center justify-center p-10   ">
        <div className="border-2 border-violet-300 rounded-3xl mb-10  ">
          {
            <PokemonCardList
              filterType={cardType}
              cardProps={{ size: "sm" }}
              className="flex justify-center items-center"
            />
          }
        </div>

        <button
          type="button"
          className="text-white font-semibold border border-violet-300 bg-violet-400/30 hover:bg-violet-400/50 rounded-lg px-4 py-2"
          onClick={drawRandomCard}
        >
          OTWÓRZ
        </button>

        <div>
          {drawnCard && <PokemonCard src={drawnCard.src} alt={drawnCard.alt} />}
        </div>

        <div className="rounded-3xl   gap-2 m-10 flex">
          {
            <PokemonCardList
              filterType={cardType}
              cardProps={{ size: "md", hover: true }}
              className="grid 2xl:grid-cols-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            />
          }
        </div>
      </div>
    </div>
  );
}
