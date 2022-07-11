import GameSetting from "./GameSetting"
import GameLog from "./GameLog"
import Queue from "class/Queue"
import SinglePlayAction from "./SinglePlayAction"

export default interface GameState<T> {
  readonly gameSetting: GameSetting
  activePlayer: number
  currentNumber: number
  isEnd: boolean
  inputEnabled: boolean,
  isIdle: boolean,
  taskQueue: Queue<T>
  gameLog: GameLog
}

export interface SinglePlayGameState extends GameState<SinglePlayAction> {

}
