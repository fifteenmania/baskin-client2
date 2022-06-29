import {
  Chart as ChartJS,
  registerables
} from 'chart.js'
import InputPanel from 'component/InputPanel';
import { getFullLoseProbMat } from 'lib/strategy';
import Header from 'component/Header'
import { GraphIcon } from 'asset/assets';
import useGameSetting from 'hooks/useGameSetting';
import useDarkMode from 'hooks/useDarkMode';
import Description from 'component/Description';
import StartingIndicator from './StartingIndicator';
import NumberIndicator from './NumberIndicator';
import { vecShiftToFirst } from 'lib/linarg';

ChartJS.register(
  ...registerables
)

export default function CalculatorMain() {
  const [gameSetting, settingDispatch] = useGameSetting();
  const loseProbMat = getFullLoseProbMat(gameSetting.numPlayer, gameSetting.maxCall, gameSetting.numEnd);
  const [dark, ] = useDarkMode();
  return <section>
    <Header svg={<GraphIcon/>} text="승률 계산기" to="/calculator"/>
    <Description>
      <p>게임 설정에 따른 이론적 승률을 계산해줍니다.</p>
    </Description>
    <InputPanel gameSetting={gameSetting} dispatch={settingDispatch}/>
    <NumberIndicator loseProbMat={loseProbMat} darkMode={dark}/>
    <StartingIndicator loseProbAtZero={vecShiftToFirst(loseProbMat[0])}/>
  </section>
}