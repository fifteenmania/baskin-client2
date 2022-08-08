import InputPanel from 'component/InputPanel';
import Header from 'component/Header'
import { GraphIcon } from 'asset/assets';
import useGameSetting from 'hooks/useGameSetting';
import useDarkMode from 'hooks/useDarkMode';
import Description from 'component/Description';
import ChartsContainer from './ChartsContainer';
import ErrorBoundary from 'component/ErrorBoundary';

export default function CalculatorMain() {
  const [gameSettingInput, settingDispatch] = useGameSetting();
  const [dark, ] = useDarkMode();
  return <section>
    <Header svg={<GraphIcon/>} text="승률 계산기" to="/calculator"/>
    <Description>
      <p>게임 설정에 따른 이론적 승률을 계산해줍니다.</p>
    </Description>
    <InputPanel gameSettingInput={gameSettingInput} dispatch={settingDispatch}/>
    <ErrorBoundary>
      <ChartsContainer gameSettingInput={gameSettingInput} darkMode={dark}/>
    </ErrorBoundary>
  </section>
}