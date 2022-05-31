import { Route, Routes } from "react-router-dom";
import CalculatorMain from "../calculator/CalculatorMain";
import HistoryMain from "../history/HistoryMain";
import SinglePlayMain from "../singlePlay/SinglePlayMain";
import Footer from "./Footer";
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
  return <div className="lg:flex lg:flex-row h-screen w-screen">
    <aside className="flex-none w-full lg:w-3/12 lg:h-screen" aria-label="Sidebar">
      <SideBar/>
    </aside>
    <div className="lg:w-9/12">
      <main className="ml-4 mr-4">
        <MainRouter/>
      </main>
      <Footer/>
    </div>
  </div>
}