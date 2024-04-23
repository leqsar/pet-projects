import { Stats } from "./types";

export default function generatePlayersArray(arrSize: number):Stats[] {
  const playersArr = [];
  for (let i = 0; i < arrSize; i++) {
    playersArr.push({
      score: 0,
      playerNumber: i
    }) 
  }

  return playersArr;
}