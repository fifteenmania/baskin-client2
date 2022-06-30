import {
  Chart as ChartJS,
  registerables
} from 'chart.js'
import InputPanel from 'component/InputPanel';
import { getFullLoseProbMat } from 'lib/strategy';
import Header from 'component/Header'
import { GraphIcon } from 'asset/assets';
import useGameSetting, { GameSettingInputToGameSetting } from 'hooks/useGameSetting';
import useDarkMode from 'hooks/useDarkMode';
import Description from 'component/Description';
import StartingIndicator from './StartingIndicator';
import NumberIndicator from './NumberIndicator';
import { vecShiftToFirst } from 'lib/linarg';

ChartJS.register(
  ...registerables
)

export default function CalculatorMain() {
  const [gameSettingInput, settingDispatch] = useGameSetting();
  const gameSetting = GameSettingInputToGameSetting(gameSettingInput);
  const loseProbMat = getFullLoseProbMat(gameSetting.numPlayer, gameSetting.maxCall, gameSetting.numEnd);
  const [dark, ] = useDarkMode();
  return <section>
    <Header svg={<GraphIcon/>} text="승률 계산기" to="/calculator"/>
    <Description>
      <p>게임 설정에 따른 이론적 승률을 계산해줍니다.</p>
    </Description>
    <InputPanel gameSetting={gameSettingInput} dispatch={settingDispatch}/>
    <div className='flex flex-row flex-wrap'>
      <article className='max-w-3xl mb-4'>
        <NumberIndicator loseProbMat={loseProbMat} darkMode={dark}/>
      </article>
      <article className='max-w-3xl'>
        <StartingIndicator loseProbAtZero={vecShiftToFirst(loseProbMat[0])}/>
      </article>
    </div>
  </section>
}