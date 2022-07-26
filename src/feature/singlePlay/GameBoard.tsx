import GameSetting from "typedef/GameSetting";
import Avatar, { ColorString } from "avataaars2"
import { useEffect, useState } from "react";
import useDarkMode from "hooks/useDarkMode";
import { SinglePlayGameState } from "typedef/GameState";
import { GameStateDispatch, useGameState } from "hooks/useGameState";

function getBackgroundColor(dark:boolean, onTurn: boolean, onEnd: boolean): ColorString {
  if (onTurn && onEnd) {
    return "Red";
  }
  if (onTurn) {
    return dark ? "Blue02" : "Blue01";
  }
  return dark ? "Gray02" : "Gray01";
}

export function PlayerAvatar({bgColor} : {bgColor: ColorString}) {
  return <div className="relative content-auto">
    <Avatar
      className="w-40 h-40 transition-all duration-500"
      backgroundColor={bgColor}
      avatarStyle="Circle"
    />
  </div>
}

function AvatarContainer({gameState, dispatch} : {gameState: SinglePlayGameState, dispatch: GameStateDispatch}) {
  const [dark, ] = useDarkMode()
  return <div className="flex flex-row flex-wrap mt-6">
    {Array.from({length: gameState.gameSetting.numPlayer}).map((_, i) => <PlayerAvatar key={i} bgColor={getBackgroundColor(dark, gameState.activePlayer === i, gameState.isEnd)}/>)}
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
      {availableCall.map((call, i) => <option key={i} value={call}>{call}</option>)}
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
