import Header from "../component/Header";
import SinglePlayIcon from '../asset/singlePlay2.svg'
import { InputPanelWithPlayer } from "../component/InputPanel";
import { useState } from "react";
import GameBoard from "./GameBoard";
import useGameSetting from "../hooks/useGameSetting";

export default function SinglePlayMain() {
  const [gameSetting, settingDispatch] = useGameSetting()
  const [gameStart, setGameStart] = useState(false);
  return <section> 
    <Header src={SinglePlayIcon} alt="컴퓨터와 플레이" text="컴퓨터와 플레이" to="/single-play"/>
    <div>
      <InputPanelWithPlayer gameSetting={gameSetting} dispatch={settingDispatch}/>
      <button onClick={() => setGameStart(true)}>게임 시작</button>
      {gameStart? <GameBoard /> : null}
    </div>
  </section>
}
