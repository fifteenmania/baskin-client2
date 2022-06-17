import { useEffect, useState } from "react";
import { GamePhase } from "../typedef/GamePhase";

export default function useGamePhase() {
  const [gamePhase, setGamePhase] = useState(GamePhase.BEFORE_START)
  const procedeGamePhase = (gamePhase: GamePhase) => {
    return setGamePhase((gamePhase+1)%GamePhase.__LENGTH)
  }
  return [gamePhase, procedeGamePhase];
}