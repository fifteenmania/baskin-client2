import GameSetting from "./GameSetting";

export default interface GameSettingAndSetters extends GameSetting {
  setNumPlayer: React.Dispatch<React.SetStateAction<number>>,
  setMaxCall: React.Dispatch<React.SetStateAction<number>>,
  setNumEnd: React.Dispatch<React.SetStateAction<number>>,
  setMyOrder: React.Dispatch<React.SetStateAction<number>>
}