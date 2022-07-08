import GameSetting from "./GameSetting"

export interface GameState {
  gameSetting: GameSetting
  currentPlayer: number
  currentNumber: number
  isEnd: boolean
}