import GameSetting from "typedef/GameSetting";
import Avatar, { ColorString } from "avataaars2"
import { useEffect, useMemo, useState } from "react";
import useDarkMode from "hooks/useDarkMode";
import { GameState, getPrevPlayer, useGameState } from "hooks/useGameState";

function getBackgroundColor(dark:boolean, onTurn: boolean, onEnd: boolean): ColorString {
  if (onTurn && onEnd) {
    return "Red";
  }
  if (onTurn) {
    return dark ? "Blue02" : "Blue01";
  }
  return dark ? "Gray02" : "Gray01";
}

function NumberCallBox({call} : {call: number}) {
  return <div className="w-9 h-9
    absolute 
    top-0 
    bg-secondary-600 
    font-bold
    text-xl
    text-center 
    justify-center
    rounded-lg
    ">
    {call}
  </div>
}

export function PlayerAvatar({bgColor, call} : {bgColor: ColorString, call?: number}) {
  return <div className="relative content-auto">
    {call === undefined? null : <NumberCallBox call={call}/>}
    <Avatar
      className="w-40 h-40 transition-all duration-500"
      backgroundColor={bgColor}
    />
  </div>
}

function AvatarContainer({gameState} : {gameState: GameState}) {
  const [dark, ] = useDarkMode()
  return <div className="flex flex-row flex-wrap mt-6">
    {Array.from({length: gameState.gameSetting.numPlayer}, (_, i) => {
      const onTurn = gameState.currentPlayer === i;
      const onPrevTurn = gameState.isEnd? (gameState.currentPlayer === i) : (getPrevPlayer(gameState.currentPlayer, gameState.gameSetting.numPlayer) === i && gameState.currentNum !== 0);
      return (<PlayerAvatar 
        key={i} 
        bgColor={getBackgroundColor(dark, onTurn, gameState.isEnd)}
        call={onPrevTurn? gameState.currentNum : undefined}/>
      )})
    }
  </div>
}

function getAvailableCallList(currentNum: number, gameSetting: GameSetting) {
  const start = currentNum + 1
  const call = gameSetting.maxCall - 1
  const end = (start + call > gameSetting.numEnd) ? gameSetting.numEnd : start + call;
  return Array.from({length: end - start + 1}, (_, i) => start + i)
}

function InputContainer({gameState, backToSetting} : {gameState: GameState, backToSetting: () => void}) {
  const availableCall = useMemo(() => getAvailableCallList(gameState.currentNum, gameState.gameSetting), [gameState.currentNum, gameState.gameSetting]);
  const [call, setCall] = useState(() => availableCall[0]);
  useEffect(() => {
    if (availableCall.length === 0) {
      setCall(-1);
      return;
    }
    setCall(availableCall[0]);
  }, [availableCall, gameState.gameSetting]);
  //const debugString = ` 현재 숫자 ${gameState.currentNum}, 플레이어 ${gameState.currentPlayer}, 종료여부 ${gameState.isEnd}, 저장된 콜 ${call}`
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
      }}
      disabled={!gameState.inputAvailable}
    >까지 말하기</button>
    <button onClick={() => {
      setCall(1);
      gameState.reset()
    }}>재시작</button>
    <button onClick={backToSetting}>
      게임 설정 변경
    </button>
  </div>
}

function GameLogBox({gameState}: {gameState: GameState}) {
  return <div className="flex flex-col">
    {gameState.log.map((log, i) => <div key={i}>{`${log.player} : ${log.number}`}</div>)}  
  </div>
}

export default function GameBoard({gameSetting, backToSetting}: {gameSetting: GameSetting, backToSetting: () => void}) {
  const gameState = useGameState(gameSetting);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (gameState.currentPlayer !== gameSetting.myOrder && !gameState.isEnd) {
        const bestNum = gameState.getBestNum();
        gameState.setCurrentNum(bestNum);
      }
    }, 300)
    return () => clearTimeout(timeout)
  }, [gameState, gameSetting]);
  return <div className="mt-6">
    <InputContainer gameState={gameState} backToSetting={backToSetting}/>
    <AvatarContainer gameState={gameState}/>
    <GameLogBox gameState={gameState}/>
  </div>
}
