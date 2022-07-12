import { HistoryIcon } from 'asset/assets'
import Description from 'component/Description'
import Header from 'component/Header'

export default function HistoryMain() {
  return <section>
    <Header svg={<HistoryIcon/>} text="대전 기록" to="/history"/>
    <Description>
      <p>구현 중인 기능입니다.</p>
    </Description>
  </section>
}