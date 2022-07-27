import Queue from "class/Queue";
import { getFullLoseProbMat } from "lib/strategy";
import { useEffect, useId, useMemo, useReducer } from "react";
import GameSetting from "typedef/GameSetting";
import { SinglePlayGameState } from "typedef/GameState";
import SinglePlayAction from "typedef/SinglePlayAction";

export type GameStateDispatch = React.Dispatch<SinglePlayAction>

export function getNextPlayer(currentPlayer: number, numPlayer: number) {
  return (currentPlayer + 1) % numPlayer
}

export function getPrevPlayer(currentPlayer: number, numPlayer: number) {
  return (currentPlayer - 1 + numPlayer) % numPlayer
}

function gameStateReducer(state: SinglePlayGameState, action: SinglePlayAction): SinglePlayGameState {
  if (state.isEnd) {
    return state;
  }
  switch (action.type) {
    case "call": {
      const nextPlayer = getNextPlayer(state.activePlayer, state.gameSetting.numPlayer)
      if (action.payload >= state.gameSetting.numEnd) {
        return {
          ...state,
          activePlayer: nextPlayer,
          currentNumber: action.payload,
          isEnd: true,
        }
      }
      return {
        ...state,
        activePlayer: nextPlayer,
        currentNumber: action.payload,
      }
    }
    default:
      return state;
  }
}

function getInitialGameState(gameSetting: GameSetting, gameId: string): SinglePlayGameState {
  return {
    gameSetting: gameSetting,
    activePlayer: 0,
    currentNumber: 0,
    inputEnabled: false,
    isEnd: false,
    gameLog: {
      gameId: gameId,
      gameSetting: gameSetting,
      log: []
    }
  }
}

export function useGameState(gameSetting: GameSetting) {
  const gameId = useId();
  const [state, dispatch] = useReducer(gameStateReducer, getInitialGameState(gameSetting, gameId));
  const losemat = useMemo(() => getFullLoseProbMat(gameSetting.numPlayer, gameSetting.maxCall, gameSetting.numEnd), []);
  
  useEffect(() => {
    // on ai turn
    if (state.activePlayer === gameSetting.myOrder) {
      return
    }
    
  }, [state])
  return [state, dispatch] as const
}
