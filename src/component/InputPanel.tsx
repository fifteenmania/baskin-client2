import React from "react"
import { GameSettingActionsKind, GameSettingDispatch } from "../hooks/useGameSetting";
import { GameSettingInput } from "../typedef/GameSetting";

export function InputFieldNumber({onChange, name, value, ...props}: {onChange: React.ChangeEventHandler<HTMLInputElement>, name: string, value: string}) {
  return <input className="border 
    dark:bg-gray-800
    border-gray-300 
    dark:border-gray-600
    text-base 
    rounded-lg 
    outline-1
    focus:outline-blue-600
    dark:focus:outline-blue-200
    block 
    w-full 
    p-2" type="number" onChange={onChange} value={value} name={name} {...props} />
}

export function InputFieldLabel({htmlFor, children}: {htmlFor: string, children?: React.ReactNode}) {
  return <label htmlFor={htmlFor} className=" text-base font-medium block text-gray-800 dark:text-gray-100">
    {children}
  </label>
}

export function InputFieldContainer({children}: {children?: React.ReactNode}) {
  return <div className="mb-4 max-w-sm">
    {children}
  </div>
}

function InputBasicFields({gameSettingInput, dispatch} : {gameSettingInput: GameSettingInput, dispatch: GameSettingDispatch}) {
  return <>
  <InputFieldContainer>
      <InputFieldLabel htmlFor="num-player">플레이어 수</InputFieldLabel>
      <InputFieldNumber name="num-player" value={gameSettingInput.numPlayer} onChange={(e) => dispatch({type: GameSettingActionsKind.SET_NUM_PLAYER, payload: e.target.value})}/>
    </InputFieldContainer>
    <InputFieldContainer>
      <InputFieldLabel htmlFor="max-call">한 번에 부르는 최대 수</InputFieldLabel>
      <InputFieldNumber name="max-call" value={gameSettingInput.maxCall} onChange={(e) => dispatch({type: GameSettingActionsKind.SET_MAX_CALL, payload: e.target.value})}/>
    </InputFieldContainer>
    <InputFieldContainer>
      <InputFieldLabel htmlFor="num-end">마지막 숫자</InputFieldLabel>
      <InputFieldNumber name="num-end" value={gameSettingInput.numEnd} onChange={(e) => dispatch({type: GameSettingActionsKind.SET_NUM_END, payload: e.target.value})}/>
    </InputFieldContainer>
  </>
}

export default function InputPanel({gameSettingInput, dispatch} : {gameSettingInput: GameSettingInput, dispatch: GameSettingDispatch}) {
  return <div className="flex flex-col mt-4 mb-4">
    <InputBasicFields gameSettingInput={gameSettingInput} dispatch={dispatch}/>
  </div>
}

export function InputPanelWithPlayer({gameSettingInput, dispatch} : {gameSettingInput: GameSettingInput, dispatch: GameSettingDispatch}) {
  return <div className="flex flex-col mt-4 mb-4">
    <InputBasicFields gameSettingInput={gameSettingInput} dispatch={dispatch}/>
    <InputFieldContainer>
      <InputFieldLabel htmlFor="my-turn">나의 순서</InputFieldLabel>
      <InputFieldNumber name="my-turn" value={gameSettingInput.myOrder} onChange={(e) => dispatch({type: GameSettingActionsKind.SET_MY_ORDER, payload: e.target.value})}/>
    </InputFieldContainer>
  </div>
}