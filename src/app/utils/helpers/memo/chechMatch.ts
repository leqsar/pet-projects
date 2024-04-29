import { CardType } from "../../constants/memo/types";

export default function checkMatch(cardsArr: CardType[], indexesArr: number[]): boolean {
  const chosenCards = indexesArr.map((index) => {
    return cardsArr[index];
  })
  if(chosenCards[0].content === chosenCards[1].content) return true;
  return false;
}