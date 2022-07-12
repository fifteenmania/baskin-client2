import { Spinner } from "component/Spinner";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Landing from "./Landing";
import SideBar from "./SideBar";

const CalculatorMain = React.lazy(() => import("../calculator/CalculatorMain"));
const SinglePlayMain = React.lazy(() => import("../singlePlay/SinglePlayMain"));
const HistoryMain = React.lazy(() => import("../history/HistoryMain"));

export function MainRouter() {
  return <Suspense fallback={<Spinner/>}>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/calculator" element={<CalculatorMain/>} />
      <Route path="/single-play" element={<SinglePlayMain/>} />
      <Route path="/history" element={<HistoryMain/>} />
    </Routes>
  </Suspense>
}

export default function Main() {
  // aside의 width 수정하면 하단 div 또한 수정할 것
  return <div className="h-full lg:flex lg:min-h-screen transition-all">
    <aside className="w-full lg:w-60 lg:flex-none" aria-label="Sidebar">
      <SideBar/>
    </aside>
    <div className="w-full lg:w-[calc(100%-15rem)] lg:flex-none">
      <main className="ml-4 mr-4">
        <MainRouter/>
      </main>
      <Footer/>
    </div>
  </div>
}
