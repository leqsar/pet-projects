import type { CardType } from "./types";

export default function randomizeArray(array : CardType[]) : CardType[] {
  let shuffledArray = array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  
  return shuffledArray;
}