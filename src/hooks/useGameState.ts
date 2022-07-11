import Queue from "class/Queue";
import { useEffect, useId, useReducer } from "react";
import GameSetting from "typedef/GameSetting";
import { SinglePlayGameState } from "typedef/GameState";
import SinglePlayAction from "typedef/SinglePlayAction";

export type GameStateDispatch = React.Dispatch<SinglePlayAction>

function getNextPlayer(currentPlayer: number, numPlayer: number) {
  return (currentPlayer + 1) % numPlayer
}

function gameStateReducer(state: SinglePlayGameState, action: SinglePlayAction): SinglePlayGameState {
  switch (action.type) {
    case "call": {
      const newQueue = state.taskQueue.copy()
      Array({length: action.payload - state.currentNumber - 1}).forEach((_, i) => {
        const action: SinglePlayAction = {type: "countUp", payload: state.currentNumber + i + 1}
        newQueue.push(action)
      })
      newQueue.push({type: "turnEnd", payload: action.payload})
      return {
        ...state,
        taskQueue: newQueue
      }
    }
    case "countUp": {
      const newQueue = state.taskQueue.copy()
      return {
        ...state,
        taskQueue: newQueue,
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
    taskQueue: new Queue(gameSetting.numPlayer * gameSetting.maxCall),
    inputEnabled: false,
    isEnd: false,
    isIdle: true,
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
  useEffect(() => {
    if (!state.isIdle) {
      return;
    }

  }, [state])
  return [state, dispatch] as const
}