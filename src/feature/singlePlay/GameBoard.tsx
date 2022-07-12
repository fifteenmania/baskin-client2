import GameSetting from "typedef/GameSetting";
import Avatar, { ColorString } from "avataaars2"
import { useEffect, useState } from "react";
import useDarkMode from "hooks/useDarkMode";
import { SinglePlayGameState } from "typedef/GameState";
import { GameStateDispatch, useGameState, getPrevPlayer } from "hooks/useGameState";
import useDisplayNumber, { useDisplayNumbers } from "hooks/useDisplayNumber";

function getBackgroundColor(dark:boolean, onTurn: boolean, onEnd: boolean): ColorString {
  if (onTurn && onEnd) {
    return "Red";
  }
  if (onTurn) {
    return dark ? "Blue02" : "Blue01";
  }
  return dark ? "Gray02" : "Gray01";
}

export function PlayerAvatar({bgColor, displayNumber, onAnimationEnd} : {bgColor: ColorString, displayNumber: number|null, onAnimationEnd: () => void}) {
  return <div className="relative content-auto">
    <div className="w-12
      absolute
      top-0 left-2
    bg-gray-700
      font-semibold
      text-2xl
      text-gray-100
      text-center
      align-bottom
      animate-fadeout
      "
      key={displayNumber}
      onAnimationEnd={onAnimationEnd}
      >{displayNumber}</div>
    <Avatar
      className="w-40 h-40 transition-all duration-500"
      backgroundColor={bgColor}
      avatarStyle="Circle"
    />
  </div>
}

function AvatarContainer({gameState, dispatch} : {gameState: SinglePlayGameState, dispatch: GameStateDispatch}) {
  const [dark] = useDarkMode()
  const [count, activated, setDisplayNumbers, countUp, activate, deactivate] = useDisplayNumbers(gameState.gameSetting.numPlayer);
  const displayNumbers = count.map((num, i) => activated[i] ? num : null);
  useEffect(() => {
    const prevPlayer = getPrevPlayer(gameState.activePlayer, gameState.gameSetting.numPlayer);
    setDisplayNumbers(prevPlayer, count[prevPlayer], gameState.currentNumber, () => console.log("end"));
  }, [gameState.currentNumber])
  useEffect(() => {
    activate(gameState.activePlayer);
    const prevPlayer = getPrevPlayer(gameState.activePlayer, gameState.gameSetting.numPlayer);
    console.log("deactivate", prevPlayer);
    deactivate(prevPlayer);
  }, [gameState.activePlayer])
  return <div className="flex flex-row flex-wrap mt-6">
    {Array.from({length: gameState.gameSetting.numPlayer}).map((_, i) => <PlayerAvatar key={i} 
        displayNumber={displayNumbers[i]}
        bgColor={getBackgroundColor(dark, i===gameState.activePlayer, gameState.isEnd)}
        onAnimationEnd={() => countUp(i)}
        />)}
  </div>
}

function getAvailableCallList(gameState: SinglePlayGameState) {
  const start = gameState.currentNumber + 1
  const call = gameState.gameSetting.maxCall - 1
  const end = (start + call > gameState.gameSetting.numEnd) ? gameState.gameSetting.numEnd : start + call;
  return Array.from({length: end - start + 1}).map((_, i) => start + i)
}

function InputContainer({gameState, dispatch} : {gameState: SinglePlayGameState, dispatch: GameStateDispatch}) {
  const availableCall = getAvailableCallList(gameState);
  const [call, setCall] = useState(availableCall[0]);
  return <div className="">
    <select
      className="w-24 h-12
        font-semibold
        text-xl
        rounded-lg
        border
        border-gray-300
        bg-white
        dark:bg-gray-800
      dark:text-gray-100
        mr-4
      "
      value={call}
      onChange={(e) => setCall(parseInt(e.target.value))}
    >
      {availableCall.map((call, i) => <option 
        key={i} value={call}>{call}</option>)}
    </select>
    <button onClick={() => {
      dispatch({type: "call", payload: call})
      setCall(call+1)
    }}
    >까지 말하기</button>
  </div>
}

export default function GameBoard({gameSetting}: {gameSetting: GameSetting}) {
  const [gameState, dispatch] = useGameState(gameSetting);
  return <div className="mt-6">
    <InputContainer gameState={gameState} dispatch={dispatch}/>
    <AvatarContainer gameState={gameState} dispatch={dispatch}/>
  </div>
}
