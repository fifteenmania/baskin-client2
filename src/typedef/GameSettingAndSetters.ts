import { Dispatch, SetStateAction } from "react";
import GameSetting from "./GameSetting";

type SetState<T> = Dispatch<SetStateAction<T>>;

export default interface GameSettingAndSetters extends GameSetting {
  setNumPlayer: SetState<string>,
  setMaxCall: SetState<string>,
  setNumEnd: SetState<string>,
  setMyOrder: SetState<string>
}
