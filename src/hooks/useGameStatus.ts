import { useEffect, useState } from "react";
import GameSetting from "../typedef/GameSetting";
import useStrategy from "./useStrategy";

// working on
export default function useGameStatus(gameSetting: GameSetting, waitTime: number = 300) {
  const [turnPlayer, setTurnPlayer] = useState(0)
  const {currentNum, callNextNum, isEnd} = useStrategy(gameSetting);
  const pending = (turnPlayer === gameSetting.myOrder)
  useEffect(() => {
    let timer = null
    if (pending) {
      timer = setTimeout(() => {
        
      }, waitTime)
    }
  })
  return 
}