import { useCallback, useState } from "react";
import { Card, cards } from "../components/dataCard";
import ParseCardType from "../components/parseCardType";

export default function useDrawRandomCard() {
  const CardType = ParseCardType();
  const [drawnCard, setDrawnCard] = useState<Card | null>(null);

  const availableCards = CardType
    ? cards.filter((c) => c.type === CardType)
    : cards;

  const drawRandomCard = useCallback(() => {
    if (availableCards.length === 0) return;
    const index = Math.floor(Math.random() * availableCards.length);
    setDrawnCard(availableCards[index]);
  }, [availableCards]);

  return {
    drawnCard,
    drawRandomCard,
  };
}
