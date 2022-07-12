import { useRef, useState } from "react"
import { maskVecAsMin, matSliceCol, vecFindMinIdx } from "../lib/linarg";
import { getRandomIndex } from "../lib/randUtil";
import { getFullLoseProbMat } from "../lib/strategy"
import GameSetting from "../typedef/GameSetting"

export function getNextCall(loseProbMat: number[][], maxCall: number, currentNum: number): number {
  const loseProbVec = matSliceCol(loseProbMat.slice(currentNum+1, currentNum+maxCall+1), 0);
  const mask = maskVecAsMin(loseProbVec);
  const bestNum = getRandomIndex(mask);
  return currentNum + bestNum + 1;
}

interface UseStrategy {
  currentNum: number,
  getBestNum: () => number,
  setNextNum: (call: number) => boolean,
  getLoseProb: (target: number) => number,
  isEnd: boolean
}

export default function useStrategy(gameSetting: GameSetting): UseStrategy {
  const loseProbMatRef = useRef<number[][]>(getFullLoseProbMat(gameSetting.numPlayer, gameSetting.maxCall, gameSetting.numEnd))
  const [currentNum, setCurrentNum] = useState(0);
  return {
    currentNum: currentNum,
    getBestNum: () => getNextCall(loseProbMatRef.current, gameSetting.maxCall, currentNum),
    setNextNum: (call: number) => {
      if (call <= currentNum || call > currentNum + gameSetting.maxCall) {
        return false
      }
      setCurrentNum(call)
      return true
    },
    getLoseProb: (target: number) => loseProbMatRef.current[target][0],
    isEnd: currentNum < gameSetting.numEnd
  }
}