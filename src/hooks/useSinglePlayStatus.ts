import { useEffect, useState } from "react";
import type GameSetting from "../typedef/GameSetting";
import useStrategy from "./useStrategy";
import GameType from "../typedef/GameType"
import { GamePhase } from "../typedef/GamePhase";

interface GameStatus {
  gameType: GameType,
  gameSetting: GameSetting,
  gamePhase: GamePhase,
  currentNum: number,
  callLog: number[]
}

function getInitialGameStatus(gameSetting: GameSetting): GameStatus {
  return {
    gameType: GameType.SINGLE_PLAY,
    gameSetting: gameSetting,
    gamePhase: GamePhase.BEFORE_START,
    currentNum: 0,
    callLog: []
  }
}

interface PlayLog {
  gameType: GameType,
  gameSetting: GameSetting,
  callLog: number[]
}

enum GameStatusActionsKind {

}

interface GameStatusAction {
}


export function procedeGamePhase() {

}

// working on
export default function useSinglePlayStatus(gameSetting: GameSetting, waitTime: number = 300) {

}