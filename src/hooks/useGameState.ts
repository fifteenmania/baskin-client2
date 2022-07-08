import { useReducer } from "react";
import GameSetting from "typedef/GameSetting";
import { GameState } from "typedef/GameState";

export const gameStateActionKind = [
  "count",
] as const

export type GameStateActionType = typeof gameStateActionKind[number]

export interface GameStateAction {
  type: GameStateActionType,
  payload: number
}

export type GameStateDispatch = React.Dispatch<GameStateAction>

function getNextPlayer(currentPlayer: number, numPlayer: number) {
  return (currentPlayer + 1) % numPlayer
}

function gameStateReducer(state: GameState, action: GameStateAction): GameState {
  switch (action.type) {
    case "count":
      const nextPlayer = getNextPlayer(state.currentPlayer, state.gameSetting.numPlayer)
      const nextNumber = action.payload;
      if (nextNumber >= state.gameSetting.numEnd) {
        return {
          ...state,
          isEnd: true,
          currentNumber: state.gameSetting.numEnd,
        }
      }
      return {
        ...state,
        currentPlayer: nextPlayer,
        currentNumber: nextNumber
      }
    default:
      return state;
  }
}

function getInitialGameState(gameSetting: GameSetting): GameState {
  return {
    gameSetting: gameSetting,
    currentPlayer: 0,
    currentNumber: 0,
    isEnd: false
  }
}

export function useGameState(gameSetting: GameSetting) {
  return useReducer(gameStateReducer, getInitialGameState(gameSetting))
}