export type CardType = {
  number: number,
  content: string,
  isOpen: boolean,
  isLocked: boolean,
}

export type Theme = 'Numbers' | 'Icons';

export type GridSize = '4' | '6';

export type PlayersNumber = '1' | '2' | '3' | '4';

export type Settings = {
  theme: Theme | '';
  playersNumber: PlayersNumber | '';
  gridSize: GridSize | '';
}

export type Stats = {
  score: number,
  playerNumber: number
}