import React, { useState } from "react"

export interface GameSetting {
  numPlayer: number,
  maxCall: number,
  numEnd: number,
  myOrder: number
}

export interface GameSettingAndSetters extends GameSetting {
  setNumPlayer: React.Dispatch<React.SetStateAction<number>>,
  setMaxCall: React.Dispatch<React.SetStateAction<number>>,
  setNumEnd: React.Dispatch<React.SetStateAction<number>>
}

export function useGameSetting(): GameSettingAndSetters {
  const [numPlayer, setNumPlayer] = useState(3);
  const [maxCall, setMaxCall] = useState(3);
  const [numEnd, setNumEnd] = useState(31);
  return {
    numPlayer: numPlayer,
    maxCall: maxCall,
    numEnd: numEnd,
    myOrder: 0,
    setNumPlayer: setNumPlayer,
    setMaxCall: setMaxCall,
    setNumEnd: setNumEnd
  }
}

function changeEventToValue(e: React.ChangeEvent<HTMLInputElement>) {
  const value = parseInt(e.target.value);
  if (isNaN(value)) {
    return 1
  }
  if (value <= 0) {
    return 1
  }
  return value
}

function InputFieldNumber({onChange, name, value, ...props}: {onChange: React.ChangeEventHandler<HTMLInputElement>, name: string, value: number}) {
  return <input className="bg-gray-50 border border-gray-300 text-gray-800  text-base rounded-lg focus:outline-blue-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600" type="number" onChange={onChange} value={value} name={name} {...props} />
}

function InputFieldLabel({htmlFor, children}: {htmlFor: string, children?: React.ReactNode}) {
  return <label htmlFor={htmlFor} className=" text-base font-medium block text-gray-800">
    {children}
  </label>
}

function InputFieldContainer({children}: {children?: React.ReactNode}) {
  return <div className="mb-4 max-w-sm">
    {children}
  </div>
}

function InputBasicFields({gameSetting} : {gameSetting: GameSettingAndSetters}) {
  return <>
  <InputFieldContainer>
      <InputFieldLabel htmlFor="num-player">플레이어 수</InputFieldLabel>
      <InputFieldNumber name="num-player" value={gameSetting.numPlayer} onChange={(e) => gameSetting.setNumPlayer(changeEventToValue(e))}/>
    </InputFieldContainer>
    <InputFieldContainer>
      <InputFieldLabel htmlFor="max-call">한 번에 부르는 최대 수</InputFieldLabel>
      <InputFieldNumber name="max-call" value={gameSetting.maxCall} onChange={(e) => gameSetting.setMaxCall(changeEventToValue(e))}/>
    </InputFieldContainer>
    <InputFieldContainer>
      <InputFieldLabel htmlFor="num-end">마지막 숫자</InputFieldLabel>
      <InputFieldNumber name="num-end" value={gameSetting.numEnd} onChange={(e) => gameSetting.setNumEnd(changeEventToValue(e))}/>
    </InputFieldContainer>
  </>
}

export default function InputPanel({gameSetting} : {gameSetting: GameSettingAndSetters}) {
  return <div className="flex flex-col bg-white mt-4 mb-4">
    <InputBasicFields gameSetting={gameSetting}/>
  </div>
}

export function InputPanelWithPlayer({gameSetting} : {gameSetting: GameSettingAndSetters}) {
  return <div className="flex flex-col bg-white mt-4 mb-4">
    <InputBasicFields gameSetting={gameSetting}/>
    <InputFieldContainer>
      <InputFieldLabel htmlFor="my-turn">나의 순서</InputFieldLabel>
      <InputFieldNumber name="my-turn" value={gameSetting.myOrder} onChange={(e) => gameSetting.setNumPlayer(changeEventToValue(e))}/>
    </InputFieldContainer>
  </div>
}