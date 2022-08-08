import {
  Chart as ChartJS,
  registerables
} from 'chart.js'
import StartingIndicator from './StartingIndicator';
import NumberIndicator from './NumberIndicator';
import { vecShiftToFirst } from 'lib/linarg';
import { GameSettingInput } from 'typedef/GameSetting';
import { gameSettingInputToGameSetting } from 'hooks/useGameSetting';
import { useDeferredValue, useMemo } from 'react';
import { getFullLoseProbMat } from 'lib/strategy';

ChartJS.register(
  ...registerables
)

export default function ChartsContainer({gameSettingInput, darkMode}: {gameSettingInput: GameSettingInput, darkMode: boolean}) {
  const gameSetting = useDeferredValue(gameSettingInputToGameSetting(gameSettingInput));
  const loseProbMat: number[][] = useMemo(() => getFullLoseProbMat(gameSetting.numPlayer, gameSetting.maxCall, gameSetting.numEnd), [gameSetting]);
  return <div className='flex flex-row flex-wrap'>
    <article className='max-w-2xl w-full px-4 mb-8 flex-shrink flex-grow'>
      <NumberIndicator loseProbMat={loseProbMat} darkMode={darkMode}/>
    </article>
    <article className='max-w-2xl w-full px-4 flex-shrink flex-grow'>
      <StartingIndicator loseProbAtZero={vecShiftToFirst(loseProbMat[0])}/>
    </article>
  </div>
}