function LandingHeader() {
  return <header className="mb-4 mt-4">
    <h1 className="font-semibold text-3xl">써리원 시뮬레이터</h1>
  </header>
}

function MockDescription() {
  return <div>
    31을 말하면 지는 게임! 어떻게 해야 살아남을 수 있을까요?
    <ul className="list-disc list-inside">
      <li>승률 계산기로 나에게 가장 유리한 순서와 전략을 찾아보세요.</li>
      <li>컴퓨터와 플레이하세요!</li>
      <li>대전 기록을 볼 수 있습니다.</li>
    </ul>
  </div>
}

export default function Landing() {
  return <section>
    <LandingHeader/>
    <MockDescription />
  </section>
}