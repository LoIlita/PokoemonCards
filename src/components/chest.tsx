import { useNavigate } from "react-router-dom";

type ChestProps = {
  type: string;
  src: string;
};


// skąd wiem że type to fire bug itp?

export default function Chest({ type, src }: ChestProps) {
  const navigation = useNavigate();

  return (
    <div className=" w-70 h-70 bg-zinc-700  border border-zinc-800 hover:border-violet-500 p-4">
      <div className="flex flex-col items-center">
        <img className="w-40 h-40 " src={src} alt={type} />
        <p className="font-semibold text-white">{type}</p>
      </div>

      <button
        type="button"
        className="border border-blue-600 bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 mt-4 rounded hover:scale-105 transition-all duration-300"
        onClick={() => navigation(`cardPage/${type}`)}
      >
        Otwórz skrzynkę
      </button>
    </div>
  );
}
