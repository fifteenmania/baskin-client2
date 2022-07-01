import { Line } from "react-chartjs-2";

function loseProbMatToData(loseProbMat: number[][], darkMode: boolean) {
  return {
    labels: Array.from(Array(loseProbMat.length).keys()),
    datasets: [
      {
        id: 0,
        label: '플레이어 승률',
        data: loseProbMat.map(row => 1-row[0]),
        backgroundColor: '#FF4500',
        borderColor: darkMode? '#FF4500' : '#C9C7C7'
      }
    ]
  }
}

export default function NumberIndicator({loseProbMat, darkMode} : {loseProbMat: number[][], darkMode: boolean}) {
  return <div>
    <h2 className=' text-2xl'>숫자별 승률 분석</h2>
    <p>세로축(높이)는 각 숫자에서 끝냈을 때 승률을 나타냅니다.</p>
    <p>자신 턴에서 말할 수 있는 숫자 중 가장 승률이 높은 숫자까지 말하면 됩니다.</p> 
    <Line datasetIdKey='1' data={loseProbMatToData(loseProbMat, darkMode)}/>
  </div>
}