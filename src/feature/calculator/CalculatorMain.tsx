import InputPanel from 'component/InputPanel';
import { getFullLoseProbMat } from 'lib/strategy';
import Header from 'component/Header'
import { GraphIcon } from 'asset/assets';
import useGameSetting, { GameSettingInputToGameSetting } from 'hooks/useGameSetting';
import useDarkMode from 'hooks/useDarkMode';
import Description from 'component/Description';
import ChartsContainer from './ChartsContainer';
import { useDeferredValue, useMemo } from 'react';

export default function CalculatorMain() {
  const [gameSettingInput, settingDispatch] = useGameSetting();
  const gameSetting = useDeferredValue(GameSettingInputToGameSetting(gameSettingInput));
  const loseProbMat = useMemo(() => getFullLoseProbMat(gameSetting.numPlayer, gameSetting.maxCall, gameSetting.numEnd), [gameSetting]);
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