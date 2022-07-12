import React, { useReducer } from "react";
import { GameSettingInput } from "../typedef/GameSetting";

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

export function GameSettingInputToGameSetting(gameSettingInput: GameSettingInput) {
  return {
    numPlayer: Number.parseInt(gameSettingInput.numPlayer)?? 0,
    maxCall: Number.parseInt(gameSettingInput.maxCall)?? 0,
    numEnd: Number.parseInt(gameSettingInput.numEnd)?? 0,
    myOrder: Number.parseInt(gameSettingInput.myOrder) - 1?? 0
  }
}

function gameSettingReducer(state: GameSettingInput, action: GameSettingAction): GameSettingInput {
  const parsed = Number.parseInt(action.payload) ?? 0
  switch (action.type) {
    case (GameSettingActionsKind.SET_MAX_CALL):
      if (parsed > 1000) {
        return state;
      }
      const numEnd = Number.parseInt(state.numEnd);
      if (!Number.isNaN(numEnd) && parsed > numEnd) {
        return {
          ...state,
          maxCall: numEnd.toString()
        };
      }
      return {
        ...state,
        maxCall: action.payload
      }
    case(GameSettingActionsKind.SET_MY_ORDER):
      const numPlayer = Number.parseInt(state.numPlayer);
      if (!Number.isNaN(numPlayer) && parsed > numPlayer) {
        return {
          ...state,
          myOrder: (numPlayer).toString()
        }
      }
      return {
        ...state,
        myOrder: action.payload
      }
    case(GameSettingActionsKind.SET_NUM_END):
      if (parsed > 1000) {
        return state;
      }
      return {
        ...state,
        numEnd: action.payload
      }
    case(GameSettingActionsKind.SET_NUM_PLAYER):
      if (parsed > 500) {
        return state;
      }
      return {
        ...state,
        numPlayer: action.payload
      }
    default:
      return state;
  }
}

const initialSetting: GameSettingInput = {
  numEnd: "31",
  numPlayer: "3",
  maxCall: "3",
  myOrder: "1"
}

export default function useGameSetting(): [GameSettingInput, GameSettingDispatch] {
  return useReducer(gameSettingReducer, initialSetting);
}