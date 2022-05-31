import Header from "../component/Header";
import SinglePlayIcon from '../asset/singlePlay2.svg'

export default function SinglePlayMain() {
  return <section> 
    <Header src={SinglePlayIcon} alt="컴퓨터와 플레이" text="컴퓨터와 플레이" to="/single-play"/>
  </section>
}
