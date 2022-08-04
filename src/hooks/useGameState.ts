import { useEffect, useId, useMemo, useState } from "react";
import { GameLogEntry } from "typedef/GameLog";
import GameSetting from "typedef/GameSetting";
import useStrategy from "./useStrategy";

export type GameState = ReturnType<typeof useGameState>;

export function getNextPlayer(currentPlayer: number, numPlayer: number) {
  return (currentPlayer + 1) % numPlayer;
}

export function getPrevPlayer(currentPlayer: number, numPlayer: number) {
  return (currentPlayer + numPlayer - 1) % numPlayer;
}

export function useGameState(gameSetting: GameSetting) {
  const gameId = useId();
  const gameStrategy = useStrategy(gameSetting);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [log, setLog] = useState<GameLogEntry[]>([]);
  const result = useMemo(() => ({
    gameStrategy: gameStrategy,
    gameId: gameId,
    gameSetting: gameSetting,
    log: log,
    reset: () => {
      setLog([]);
      setCurrentPlayer(0);
      gameStrategy.reset();
    },
    isEnd: gameStrategy.isEnd,
    inputAvailable: currentPlayer === gameSetting.myOrder && !gameStrategy.isEnd,
    getBestNum: gameStrategy.getBestNum,
    getLoseProb: gameStrategy.getLoseProb,
    currentNum: gameStrategy.currentNum,
    currentPlayer: currentPlayer,
    setCurrentNum: (call: number) => {
      let actualCall = call;
      if (gameStrategy.isEnd) {
        return
      }
      if (call < gameStrategy.currentNum) {
        return
      }
      if (call > gameSetting.maxCall + gameStrategy.currentNum) {
        actualCall = gameSetting.maxCall + gameStrategy.currentNum;
      }
      if (call >= gameSetting.numEnd) {
        actualCall = gameSetting.numEnd;
      } else {
        setCurrentPlayer((currentPlayer) => getNextPlayer(currentPlayer, gameSetting.numPlayer));
      }
      gameStrategy.setNextNum(actualCall);
      setLog((lastLog) => [...lastLog, { player: currentPlayer, number: actualCall }]);
    },
  }), [gameStrategy, gameSetting, gameId, currentPlayer, log]);
  return result;
}
