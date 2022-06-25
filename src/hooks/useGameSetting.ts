import React, { useReducer } from "react";
import GameSetting from "../typedef/GameSetting";

export enum GameSettingActionsKind {
  SET_NUM_PLAYER = 'SET_NUM_PLAYER',
  SET_MAX_CALL = 'SET_MAX_CALL',
  SET_NUM_END = 'SET_NUM_END',
  SET_MY_ORDER = 'SET_MY_ORDER'
}

export interface GameSettingAction {
  type: GameSettingActionsKind,
  payload: string
}

export type GameSettingDispatch = React.Dispatch<GameSettingAction>

function gameSettingReducer(state: GameSetting, action: GameSettingAction): GameSetting {
  const parsed = Number.parseInt(action.payload)
  if (Number.isNaN(parsed) || parsed < 0) {
    return state
  }
  switch (action.type) {
    case (GameSettingActionsKind.SET_MAX_CALL):
      return {
        ...state,
        maxCall: parsed
      }
    case(GameSettingActionsKind.SET_MY_ORDER):
      if (parsed > state.numPlayer || parsed === 0) {
        return state
      }
      return {
        ...state,
        myOrder: parsed-1
      }
    case(GameSettingActionsKind.SET_NUM_END):
      return {
        ...state,
        numEnd: parsed
      }
    case(GameSettingActionsKind.SET_NUM_PLAYER):
      return {
        ...state,
        numPlayer: parsed
      }
    default:
      return state;
  }
}

const initialSetting: GameSetting = {
  numEnd: 31,
  numPlayer: 3,
  maxCall: 3,
  myOrder: 0
}

export default function useGameSetting(): [GameSetting, GameSettingDispatch] {
  return useReducer(gameSettingReducer, initialSetting);
}