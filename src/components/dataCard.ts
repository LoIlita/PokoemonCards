import { CardType}  from "./pokemonCard.tsx";


type Card = {
  key: number;
  type: CardType;
  src: string;
  alt: string;
  price: number
  premium: number,
  superbogaty:number
}


export const cards: Card[] = [
  //bug type cards
  {
    key: 1,
    type: CardType.BUG,
    src: "src/images/bug/1.png",
    alt: "1",
    price: 10,
    premium:20,
    superbogaty:50

    
  },

  {
    key: 2,
    type: CardType.BUG,
    src: "src/images/bug/2.png",
    alt: "2",
    price: 10,
    premium:20,
    superbogaty:50
  },

  {
    key: 3,
    type: CardType.BUG,
    src: "src/images/bug/3.png",
    alt: "3",
    price: 10,
    premium:20,
    superbogaty:50    
  },

  {
    key: 4,
    type: CardType.BUG,
    src: "src/images/bug/4.png",
    alt: "4",
    price: 10,
    premium:20,
    superbogaty:50    
  },

  {
    key: 5,
    type: CardType.BUG,
    src: "src/images/bug/5.png",
    alt: "5",
    price: 10,
    premium:20,
    superbogaty:50 
  },

  {
    key: 6,
    type: CardType.BUG,
    src: "src/images/bug/6.png",
    alt: "6",
    price: 10,
    premium:20,
    superbogaty:50
  },

  {
    key: 7,
    type: CardType.BUG,
    src: "src/images/bug/7.png",
    alt: "7",
    price: 10,
    premium:20,
    superbogaty:50
  },

  {
    key: 8,
    type: CardType.BUG,
    src: "src/images/bug/8.png",
    alt: "8",
    price: 10,
    premium:20,
    superbogaty:50
  },

  {
    key: 9,
    type: CardType.BUG,
    src: "src/images/bug/9.png",
    alt: "9",
    price: 10,
    premium:20,
    superbogaty:50
  },

  {
    key: 10,
    type: CardType.BUG,
    src: "src/images/bug/10.png",
    alt: "10",
    price: 10,
    premium:20,
    superbogaty:50
  },

  {
    key: 11,
    type: CardType.FIRE,
    src: "src/images/fire/4.png",
    alt: "11",
    price: 10,
    premium:20,
    superbogaty:50
   
  },

  {
    key: 12,
    type: CardType.FIRE,
    src: "src/images/fire/5.png",
    alt: "12",
    price: 10,
    premium:20,
    superbogaty:50

  },

  {
    key: 13,
    type: CardType.FIRE,
    src: "src/images/fire/37.png",
    alt: "13",
    price: 10,
    premium:20,
    superbogaty:50

  },

  {
    key: 14,
    type: CardType.BUG,
    src: "src/images/water/1.png",
    alt: "14",
    price: 10,
    premium:20,
    superbogaty:50
  },

    {
    key: 15,
    type: CardType.WATER,
    src: "src/images/water/7.png",
    alt: "15",
    price: 10,
    premium:20,
    superbogaty:50
  },

    {
    key: 16,
    type: CardType.WATER,
    src: "src/images/water/9.png",
    alt: "16",
    price: 10,
    premium:20,
    superbogaty:50
  },

  {
    key: 17,
    type: CardType.WATER,
    src: "src/images/water/87.png",
    alt: "17",
    price: 10,
    premium:20,
    superbogaty:50
  },
  
  {
    key: 18,
    type: CardType.ELECTRIC,
    src: "src/images/electric/19.png",
    alt: "18",
    price: 10,
    premium:20,
    superbogaty:50
  },
  
  {
    key: 19,
    type: CardType.ELECTRIC,
    src: "src/images/electric/25.png",
    alt: "19",
    price: 10,
    premium:20,
    superbogaty:50
  },

  {
    key: 20,
    type: CardType.ELECTRIC,
    src: "src/images/electric/26.png",
    alt: "20",
    price: 10,
    premium:20,
    superbogaty:50
  },
  
  {
    key: 21,
    type: CardType.ELECTRIC,
    src: "src/images/electric/145.png",
    alt: "21",
    price: 10,
    premium:20,
    superbogaty:50
  }    
  



];


export type { Card, CardType };