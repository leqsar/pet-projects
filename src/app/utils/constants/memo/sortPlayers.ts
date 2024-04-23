import { Player } from "./types";

export default function sortPlayers(players: Player[]) : Player[] {
  return players.sort((a, b) => b.score-a.score)
}