import { useId, useMemo, useState } from "react";
import { GameLogEntry } from "typedef/GameLog";
import GameSetting from "typedef/GameSetting";
import useStrategy from "./useStrategy";

export type GameState = ReturnType<typeof useGameState>;

function getNextPlayer(currentPlayer: number, numPlayer: number) {
  return (currentPlayer + 1) % numPlayer;
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
    getBestNum: gameStrategy.getBestNum,
    getLoseProb: gameStrategy.getLoseProb,
    currentNum: gameStrategy.currentNum,
    currentPlayer: currentPlayer,
    setCurrentNum: (call: number) => {
      if (gameStrategy.isEnd) {
        return
      }
      setCurrentPlayer((currentPlayer) => getNextPlayer(currentPlayer, gameSetting.numPlayer));
      gameStrategy.setNextNum(call);
      setLog((lastLog) => [...lastLog, { player: currentPlayer, number: call }]);
    },
  }), [gameStrategy, gameSetting, gameId, currentPlayer, log]);
  return result;
}
