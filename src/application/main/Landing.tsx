function LandingHeader() {
  return <header className="mb-4 mt-4">
    <h1 className="font-semibold text-3xl">써리원 시뮬레이터</h1>
  </header>
}

function MockDescription() {
  return <div>
    <text> 
      마지막 숫자를 말하면 지는 써리원 게임! 
      <p>최적 전략을 계산하는 인공지능을 사용합니다.</p>
      <p>- 승률 계산기를 통해 최적 전략을 찾아보세요.</p>
      <p>- 컴퓨터와 플레이하며 게임을 연습하세요.</p>
      <p>- 대전 기록을 통해 이전에 한 게임을 분석하세요.</p>
    </text>
  </div>
}

export default function Landing() {
  return <section>
    <LandingHeader/>
    <MockDescription />
  </section>
}