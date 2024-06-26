import { Player } from "../../constants/memo/types";

export default function passPlayersTurn(players: Player[], currentPlayer: number): number {
  if(players.length === currentPlayer) return 1;
  return currentPlayer+1;
}