import { useRef, useState } from "react"
import { matSliceCol, vecFindMinIdx } from "../lib/linarg";
import { getFullLoseProbMat } from "../lib/strategy"
import GameSetting from "../typedef/GameSetting"

export function getNextCall(loseProbMat: number[][], maxCall: number, currentNum: number): number {
  const loseProbVec = matSliceCol(loseProbMat.slice(currentNum+1, currentNum+maxCall+1), 0);
  const bestNum = vecFindMinIdx(loseProbVec);
  return currentNum + bestNum + 1;
}

interface UseStrategy {
  currentNum: number,
  getBestNum: () => number,
  callNextNum: () => number,
  getLoseProb: (target: number) => number,
  isEnd: () => boolean
}

export default function useStrategy(gameSetting: GameSetting): UseStrategy {
  const loseProbMatRef = useRef<number[][]>(getFullLoseProbMat(gameSetting.numPlayer, gameSetting.maxCall, gameSetting.numEnd))
  const [currentNum, setCurrentNum] = useState(0);
  return {
    currentNum: currentNum,
    getBestNum: () => getNextCall(loseProbMatRef.current, gameSetting.maxCall, currentNum),
    callNextNum: () => {
      const next = getNextCall(loseProbMatRef.current, gameSetting.maxCall, currentNum);
      setCurrentNum(next)
      return next;
    },
    getLoseProb: (target: number) => loseProbMatRef.current[target][0],
    isEnd: () => (currentNum < gameSetting.numEnd)
  }
}