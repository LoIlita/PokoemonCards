
import PokemonCardList from "../../components/pokemonCardList.js";
import { cards } from "../../components/dataCard.js";

export default function CardsPage() {
  

  return (
    <div>
      <div className=" flex flex-col items-center justify-center p-10   ">
        <div className="border-2 border-violet-300 rounded-3xl mb-10">
          {
            <PokemonCardList
              cardProps={{ size: "sm"  }}
              className= "flex justify-center items-center "
            />
          }
        </div>

        <button
          type="button"
          className="text-white font-semibold border border-violet-300 bg-violet-400/30 hover:bg-violet-400/50 rounded-lg px-4 py-2"
        >
          OTWÓRZ
        </button>

        <div className="rounded-3xl   gap-2 m-10 flex">
          {
            <PokemonCardList
              cardProps={{ size: "md", price: true }}
              className="grid 2xl:grid-cols-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            />
          }
        </div>
      </div>
    </div>
  );
}
