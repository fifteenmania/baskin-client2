import InputPanel from 'component/InputPanel';
import { getFullLoseProbMat } from 'lib/strategy';
import Header from 'component/Header'
import { GraphIcon } from 'asset/assets';
import useGameSetting, { gameSettingInputToGameSetting } from 'hooks/useGameSetting';
import useDarkMode from 'hooks/useDarkMode';
import Description from 'component/Description';
import ChartsContainer from './ChartsContainer';
import { useDeferredValue } from 'react';

export default function CalculatorMain() {
  const [gameSettingInput, settingDispatch] = useGameSetting();
  const gameSetting = gameSettingInputToGameSetting(gameSettingInput);
  const loseProbMat = useDeferredValue(getFullLoseProbMat(gameSetting.numPlayer, gameSetting.maxCall, gameSetting.numEnd));
  const [dark, ] = useDarkMode();
  return <section>
    <Header svg={<GraphIcon/>} text="승률 계산기" to="/calculator"/>
    <Description>
      <p>게임 설정에 따른 이론적 승률을 계산해줍니다.</p>
    </Description>
    <InputPanel gameSetting={gameSettingInput} dispatch={settingDispatch}/>
    <ChartsContainer loseProbMat={loseProbMat} darkMode={dark}/>
  </section>
}