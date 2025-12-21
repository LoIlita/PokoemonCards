import Chest from "../../components/chest";

type ChestItem = {
	id: number;
	type: string;
	src: string;
};

const chestList: ChestItem[] = [
	{ id: 1, type: "BUG", src: "src/images/bug/010.png" },
	{ id: 2, type: "FIRE", src: "src/images/fire/004.png" },
	{ id: 3, type: "WATER", src: "src/images/water/007.png" },
	{ id: 4, type: "ELECTRIC", src: "src/images/electric/025.png" },
];

export default function Kup() {
	return (
		<div className='min-h-screen flex justify-center mt-20'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-center p-4'>
				{chestList.map(chest => (
					<Chest key={chest.id} type={chest.type} src={chest.src} />
				))}
			</div>
		</div>
	);
}

export {ChestItem}