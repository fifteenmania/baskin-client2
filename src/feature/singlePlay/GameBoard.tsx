import GameSetting from "typedef/GameSetting";
import Avatar, { ColorString } from "avataaars2"
import { useEffect, useMemo, useState } from "react";
import useDarkMode from "hooks/useDarkMode";
import { GameState, useGameState } from "hooks/useGameState";

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

function AvatarContainer({gameState} : {gameState: GameState}) {
  const [dark, ] = useDarkMode()
  return <div className="flex flex-row flex-wrap mt-6">
    {Array.from({length: gameState.gameSetting.numPlayer}).map((_, i) => <PlayerAvatar key={i} bgColor={getBackgroundColor(dark, gameState.currentPlayer === i, gameState.isEnd)}/>)}
  </div>
}

function getAvailableCallList(gameState: GameState) {
  const start = gameState.currentNum + 1
  const call = gameState.gameSetting.maxCall - 1
  const end = (start + call > gameState.gameSetting.numEnd) ? gameState.gameSetting.numEnd : start + call;
  return Array.from({length: end - start + 1}).map((_, i) => start + i)
}

function InputContainer({gameState} : {gameState: GameState}) {
  const availableCall = useMemo(() => getAvailableCallList(gameState), [gameState]);
  const [call, setCall] = useState(() => availableCall[0]);
  return <div className=" space-x-2">
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
      gameState.setCurrentNum(call);
      if (call < gameState.gameSetting.numEnd) {
        setCall(call+1)
      }
    }}
    >까지 말하기</button>
    <button onClick={() => {
      setCall(1);
      gameState.reset()
    }}>재시작 </button>
    {` 현재 숫자 ${gameState.currentNum}, 플레이어 ${gameState.currentPlayer}, 종료여부 ${gameState.isEnd}, 저장된 콜 ${call}`}
  </div>
}

function GameLogBox({gameState}: {gameState: GameState}) {
  return <div className="flex flex-col">
    {gameState.log.map((log, i) => <div key={i}>{`${log.player} : ${log.number}`}</div>)}  
  </div>
}

export default function GameBoard({gameSetting}: {gameSetting: GameSetting}) {
  const gameState = useGameState(gameSetting);
  useEffect(() => {
    if (gameState.currentPlayer !== gameSetting.myOrder && !gameState.isEnd) {
      const bestNum = gameState.getBestNum();
      gameState.setCurrentNum(bestNum);
    }
  }, [gameState, gameSetting])
  return <div className="mt-6">
    <InputContainer gameState={gameState}/>
    <AvatarContainer gameState={gameState}/>
    <GameLogBox gameState={gameState}/>
  </div>
}
