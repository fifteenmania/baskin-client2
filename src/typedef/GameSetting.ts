export default interface GameSetting {
  numPlayer: number,
  maxCall: number,
  numEnd: number,
  myOrder: number
}

export interface GameSettingInput {
  numPlayer: string,
  maxCall: string,
  numEnd: string,
  myOrder: string
}
