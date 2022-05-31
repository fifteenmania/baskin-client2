
import HistoryIcon from '../asset/history.svg'
import Header from '../component/Header'

export default function HistoryMain() {
  return <section>
    <Header src={HistoryIcon} alt="대전 기록" text="대전 기록" to="/history"/>
  </section>
}