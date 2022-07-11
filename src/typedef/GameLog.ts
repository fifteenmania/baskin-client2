import GameSetting from "./GameSetting"

export default interface GameLog {
  readonly gameId: string,
  readonly gameSetting: GameSetting,
  log: GameLogEntry[]
}

export interface GameLogEntry {
  player: number,
  number: number,
}
