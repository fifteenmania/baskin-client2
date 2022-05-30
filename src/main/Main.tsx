import { Route, Routes } from "react-router-dom";
import CalculatorMain from "../calculator/CalculatorMain";
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
  return <div className="lg:flex lg:flex-row">
    <aside className="flex-none w-64" aria-label="Sidebar">
      <SideBar/>
    </aside>
    <main className="flex-auto ml-2">
      <MainRouter/>
    </main>
  </div>
}