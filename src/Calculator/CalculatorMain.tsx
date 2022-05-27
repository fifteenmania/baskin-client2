import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from "react-chartjs-2";
import InputPanel, { useGameSetting } from '../Component/InputPanel';
import { getFullLoseProbMat } from '../lib/strategy';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

/*
function loseProbMatToDataMultiple(loseProbMat: number[][]) {
  return {
    labels: Array.from(Array(loseProbMat.length).keys()),
    datasets: Array.from(Array(Math.min(loseProbMat[0].length, 3)).keys()).map((i) => ({
      id: i,
      label: i===0? `플레이어 승률` : `${i}번 다음 플레이어 승률`,
      data: loseProbMat.map(row => 1-row[i]) 
    }))
  }
}*/


function loseProbMatToData(loseProbMat: number[][]) {
  return {
    labels: Array.from(Array(loseProbMat.length).keys()),
    datasets: [
      {
        id: 0,
        label: '플레이어 승률',
        data: loseProbMat.map(row => 1-row[0]),
        backgroundColor: '#FF4500'
      }
    ]
  }
}

function Header() {
  return <header>
    <h1 className='font-bold text-3xl dark:text-white'>승률 계산기</h1>
  </header>
}

export default function CalculatorMain() {
  const gameSetting = useGameSetting();
  const loseProbMat = getFullLoseProbMat(gameSetting.numPlayer, gameSetting.maxCall, gameSetting.numEnd);
  const data = loseProbMatToData(loseProbMat)
  return <section>
    <Header/>
    <div>
      <InputPanel gameSetting={gameSetting}/>
      <Line datasetIdKey='1' data={data}/>
    </div>
  </section>
}