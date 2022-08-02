import { useMemo, useState } from "react"
import { getFullLoseProbMat, getNextCall } from "../lib/strategy"
import GameSetting from "../typedef/GameSetting"

export interface Strategy {
  currentNum: number,
  getBestNum: () => number,
  setNextNum: (call: number) => void,
  getLoseProb: (target: number) => number,
  isEnd: boolean,
  reset: () => void
}

export default function useStrategy(gameSetting: GameSetting): Strategy {
  const loseProbMat = useMemo<number[][]>(() => getFullLoseProbMat(gameSetting.numPlayer, gameSetting.maxCall, gameSetting.numEnd), [gameSetting]);
  const [currentNum, setCurrentNum] = useState(0);
  const result = useMemo(() => ({
    currentNum: currentNum,
    getBestNum: () => getNextCall(loseProbMat, currentNum, gameSetting.maxCall),
    setNextNum: (call: number) => {
      setCurrentNum((lastNum) => {
        if (call > gameSetting.maxCall + lastNum || call < lastNum) {
          return lastNum;
        }
        return call
      })
    },
    getLoseProb: (target: number) => loseProbMat[target][0],
    isEnd: currentNum >= gameSetting.numEnd,
    reset: () => setCurrentNum(0)
  }), [loseProbMat, currentNum, gameSetting])
  return result
}