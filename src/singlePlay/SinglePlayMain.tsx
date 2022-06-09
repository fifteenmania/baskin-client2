import Header from "../component/Header";
import SinglePlayIcon from '../asset/singlePlay2.svg'
import { InputPanelWithPlayer, useGameSetting } from "../component/InputPanel";
import { useState } from "react";
import GameBoard from "./GameBoard";

export default function SinglePlayMain() {
  const gameSetting = useGameSetting()
  const [gameStart, setGameStart] = useState(false);
  return <section> 
    <Header src={SinglePlayIcon} alt="컴퓨터와 플레이" text="컴퓨터와 플레이" to="/single-play"/>
    <div>
      <InputPanelWithPlayer gameSetting={gameSetting}/>
      <button onClick={() => setGameStart(true)}>게임 시작</button>
      {gameStart? <GameBoard /> : null}
    </div>
  </section>
}
