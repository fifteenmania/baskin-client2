import { Route, Routes } from "react-router-dom";
import CalculatorMain from "../Calculator/CalculatorMain";
import HistoryMain from "../history/HistoryMain";
import SinglePlayMain from "../singlePlay/SinglePlayMain";
import Landing from "./Landing";
import SideBar from "./SideBar";

export function MainRouter() {
  return <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/calculator" element={<CalculatorMain/>} />
    <Route path="/single-play" element={<SinglePlayMain/>} />
    <Route path="/history" element={<HistoryMain/>} />
  </Routes>
}

export default function Main() {
  return <div className="flex flex-row w-full">
    <aside className="flex-none w-64" aria-label="Sidebar">
      <SideBar/>
    </aside>
    <main className="flex-auto">
      <MainRouter/>
    </main>
  </div>
}