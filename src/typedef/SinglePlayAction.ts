export const singlePlayActionKind = [
  // user input based events
  "call",

  // system generated events
  "waitPlayer",
  "countUp",
  "turnEnd",

  // graphics side events
  "animationEnd",
] as const

export type SinglePlayActionType = typeof singlePlayActionKind[number]

export default interface SinglePlayAction {
  type: SinglePlayActionType,
  payload: number
}
