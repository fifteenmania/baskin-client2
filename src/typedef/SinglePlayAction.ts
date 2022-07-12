export const singlePlayActionKind = [
  // user input based events
  "call",
] as const

export type SinglePlayActionType = typeof singlePlayActionKind[number]

export default interface SinglePlayAction {
  type: SinglePlayActionType,
  payload: number
}
