import Header from "component/Header";
import { SinglePlayIcon } from "asset/assets";
import { InputPanelWithPlayer } from "component/InputPanel";
import { useRef, useState } from "react";
import GameBoard from "./GameBoard";
import useGameSetting, { gameSettingInputToGameSetting } from "hooks/useGameSetting";
import Description from "component/Description";

export default function SinglePlayMain() {
  const [gameSettingInput, settingDispatch] = useGameSetting()
  const [gameStart, setGameStart] = useState(false);
  const gameSetting = gameSettingInputToGameSetting(gameSettingInput);
  const backToSetting = () => setGameStart(false)
  return <section> 
    <Header svg={<SinglePlayIcon/>} text="컴퓨터와 플레이" to="/single-play"/>
    <Description>
      <p>최적 전략을 사용하는 컴퓨터와 게임합니다.</p>
    </Description>
    <div>
      {gameStart? null: <div>
        <InputPanelWithPlayer gameSetting={gameSettingInput} dispatch={settingDispatch}/>
        <button onClick={() => setGameStart(true)}>게임 시작</button>
      </div>}
      {gameStart? <GameBoard gameSetting={gameSetting} backToSetting={backToSetting}/> : null}
    </div>
  </section>
}
