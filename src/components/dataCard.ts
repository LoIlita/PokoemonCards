import { CardType}  from "./pokemonCard";


type Card = {
  key: number;
  type: CardType;
  src: string;
  alt: string;
}


export const cards: Card[] = [
  //bug type cards
  {
    key: 1,
    type: CardType.BUG,
    src: "src/images/bug/1.png",
    alt: "1",
  },

  {
    key: 2,
    type: CardType.BUG,
    src: "src/images/bug/2.png",
    alt: "2",
  },

  {
    key: 3,
    type: CardType.BUG,
    src: "src/images/bug/3.png",
    alt: "3",
  },

  {
    key: 4,
    type: CardType.BUG,
    src: "src/images/bug/4.png",
    alt: "4",
  },

  {
    key: 5,
    type: CardType.BUG,
    src: "src/images/bug/5.png",
    alt: "5",
  },

  {
    key: 6,
    type: CardType.BUG,
    src: "src/images/bug/6.png",
    alt: "6",
  },

  {
    key: 7,
    type: CardType.BUG,
    src: "src/images/bug/7.png",
    alt: "7",
  },

  {
    key: 8,
    type: CardType.BUG,
    src: "src/images/bug/8.png",
    alt: "8",
  },

  {
    key: 9,
    type: CardType.BUG,
    src: "src/images/bug/9.png",
    alt: "9",
  },

  {
    key: 10,
    type: CardType.BUG,
    src: "src/images/bug/10.png",
    alt: "10",
  },

  {
    key: 11,
    type: CardType.FIRE,
    src: "src/images/fire/4.png",
    alt: "11",
  }



];


export type { Card, CardType };