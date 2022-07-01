import { vecFindMaxIdx, vecFindMinIdx } from "lib/linarg"
import { Bar } from "react-chartjs-2"

export default function StartingIndicator({loseProbAtZero} : {loseProbAtZero: number[]}) {
  const bestStarting = vecFindMinIdx(loseProbAtZero)
  const worstStarting = vecFindMaxIdx(loseProbAtZero)
  const data = {
    labels: Array.from(Array(loseProbAtZero.length).keys()).map((i) => `${i+1}번`),
    datasets: [
      {
        id: 1,
        label: '플레이어 승률',
        data: loseProbAtZero.map((i) => 1-i),
        backgroundColor: '#FF4500',
      }
    ]
  }
  return <div className='pr-4 pl-4'>
    <h2 className='text-2xl'>순서별 승률 분석</h2>
    <p>{`${bestStarting + 1}번째로 하는 게 제일 유리합니다. ${worstStarting + 1}번째로 하는 게 제일 불리합니다.`}</p>
    <Bar data={data} />
  </div>
}
