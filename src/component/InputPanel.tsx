import React, { useState } from "react"

export interface GameSetting {
  numPlayer: number,
  maxCall: number,
  numEnd: number,
  setNumPlayer: React.Dispatch<React.SetStateAction<number>>,
  setMaxCall: React.Dispatch<React.SetStateAction<number>>,
  setNumEnd: React.Dispatch<React.SetStateAction<number>>
}

export function useGameSetting(): GameSetting {
  const [numPlayer, setNumPlayer] = useState(3);
  const [maxCall, setMaxCall] = useState(3);
  const [numEnd, setNumEnd] = useState(31);
  return {
    numPlayer: numPlayer,
    maxCall: maxCall,
    numEnd: numEnd,
    setNumPlayer: setNumPlayer,
    setMaxCall: setMaxCall,
    setNumEnd: setNumEnd
  }
}

function changeEventToValue(e: React.ChangeEvent<HTMLInputElement>) {
  const value = parseInt(e.target.value);
  if (isNaN(value)) {
    return 0
  }
  return value
}

function InputFieldNumber({onChange, name, value, ...props}: {onChange: React.ChangeEventHandler<HTMLInputElement>, name: string, value: number}) {
  return <input className="bg-gray-50 border text-base font-normal w-10" type="number" onChange={onChange} value={value} name={name} {...props} />
}

function InputFieldContainer({children}: {children?: React.ReactNode}) {
  return <div>
    {children}
  </div>
}

export default function InputPanel({gameSetting} : {gameSetting: GameSetting}) {
  return <div className="flex flex-row bg-white mt-5 mb-5">
    <InputFieldContainer>
      <label htmlFor="num-player">플레이어 수</label>
      <InputFieldNumber name="num-player" value={gameSetting.numPlayer} onChange={(e) => gameSetting.setNumPlayer(changeEventToValue(e))}/>
    </InputFieldContainer>
    <InputFieldContainer>
      <label htmlFor="max-call">한 번에 부르는 최대 수</label>
      <InputFieldNumber name="max-call" value={gameSetting.maxCall} onChange={(e) => gameSetting.setMaxCall(changeEventToValue(e))}/>
    </InputFieldContainer>
    <InputFieldContainer>
      <label htmlFor="num-end">마지막 숫자</label>
      <InputFieldNumber name="num-end" value={gameSetting.numEnd} onChange={(e) => gameSetting.setNumEnd(changeEventToValue(e))}/>
    </InputFieldContainer>
  </div>
}