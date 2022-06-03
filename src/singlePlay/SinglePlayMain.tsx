import Header from "../component/Header";
import SinglePlayIcon from '../asset/singlePlay2.svg'
import { InputPanelWithPlayer, useGameSetting } from "../component/InputPanel";

export default function SinglePlayMain() {
  const gameSetting = useGameSetting()
  return <section> 
    <Header src={SinglePlayIcon} alt="컴퓨터와 플레이" text="컴퓨터와 플레이" to="/single-play"/>
    <div>
      <InputPanelWithPlayer gameSetting={gameSetting}/>
      <button>게임 시작</button>
    </div>
  </section>
}
