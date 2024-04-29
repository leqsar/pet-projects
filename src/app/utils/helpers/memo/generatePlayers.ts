import { Player } from "../../constants/memo/types";

export default function generatePlayersArray(arrSize: number):Player[] {
  const playersArr = [];
  for (let i = 1; i < arrSize+1; i++) {
    playersArr.push({
      score: 0,
      playerNumber: i
    }) 
  }

  return playersArr;
}