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
import InputPanel, { useGameSetting } from '../component/InputPanel';
import { getFullLoseProbMat } from '../lib/strategy';
import Header from '../component/Header'
import GraphIcon from '../asset/graph2.svg'

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

export default function CalculatorMain() {
  const gameSetting = useGameSetting();
  const loseProbMat = getFullLoseProbMat(gameSetting.numPlayer, gameSetting.maxCall, gameSetting.numEnd);
  const data = loseProbMatToData(loseProbMat)
  return <section>
    <Header src={GraphIcon} alt="승률 계산기" text="승률 계산기" to="/calculator"/>
    <InputPanel gameSetting={gameSetting}/>
    <div className='pr-4 pl-4'>
      <Line datasetIdKey='1' data={data}/>
    </div>
  </section>
}