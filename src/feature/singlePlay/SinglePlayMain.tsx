import Header from "component/Header";
import { SinglePlayIcon } from "asset/assets";
import { InputPanelWithPlayer } from "component/InputPanel";
import { useState } from "react";
import GameBoard from "./GameBoard";
import useGameSetting from "hooks/useGameSetting";
import Description from "component/Description";
import AvatarSetting from "./AvatarSetting";

export default function SinglePlayMain() {
  const [gameSetting, settingDispatch] = useGameSetting()
  const [gameStart, setGameStart] = useState(false);
  return <section> 
    <Header svg={<SinglePlayIcon/>} text="컴퓨터와 플레이" to="/single-play"/>
    <Description>
      <p>최적 전략을 사용하는 컴퓨터와 게임합니다.</p>
    </Description>
    <div>
      <InputPanelWithPlayer gameSetting={gameSetting} dispatch={settingDispatch}/>
      <button onClick={() => setGameStart(true)}>게임 시작</button>
      {gameStart? <GameBoard /> : null}
    </div>
  </section>
}
