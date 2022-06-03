import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
//import {ReactComponent as MenuIcon} from '../asset/icons8-menu.svg'
import GraphIcon from '../asset/graph2.svg'
import SinglePlayIcon from '../asset/singlePlay2.svg'
import HistoryIcon from '../asset/history.svg'
import MenuIcon from '../asset/icons8-menu.svg'
import { useMediaQuery } from "../hooks/useMediaQuery"

function SideBarIcon({src, alt, ...props}: {src: string, alt: string}) {
  return <img src={src} className="flex-shrink-0 w-6 h-6 drop-shadow-md" alt={alt}/>
}

function SidebarItemText({children}: {children?: React.ReactNode}) {
  return <span className="flex-1 ml-3 whitespace-nowrap">{children}</span> 
}

function SideBarItem({children, to, ...props}: 
    {to: string, children?: React.ReactNode}) {
  return <li>
    <Link to={to} className="flex items-center p-2 text-base font-normal text-gray-800 rounded-lg dark:text-white hover:text-gray-900 transition hover:font-semibold hover:bg-gray-200 dark:hover:bg-gray-700" {...props}>
      {children}
    </Link>
  </li>
}

function DesktopSideBar() {
  return <div className="hidden lg:block">
    <ul className="space-y-2">
      <SideBarItem to="/calculator">
        <SideBarIcon src={GraphIcon} alt="승률 계산기"/>
        <SidebarItemText>승률 계산기</SidebarItemText>
      </SideBarItem>
      <SideBarItem to="/single-play">
        <SideBarIcon src={SinglePlayIcon} alt="컴퓨터와 플레이"/>
        <SidebarItemText>컴퓨터와 플레이</SidebarItemText>
      </SideBarItem>
      <SideBarItem to="/history">
        <SideBarIcon src={HistoryIcon} alt="대전 기록"/>
        <SidebarItemText>대전 기록</SidebarItemText>
      </SideBarItem>
    </ul>
  </div>
}

function MobileSideBarText({children}: {children?: React.ReactNode}) {
  return <span className="whitespace-nowrap text-xl p-3">{children}</span> 
}

function MobileSideBarItem({children, to, ...props}: 
    {to: string, children?: React.ReactNode}) {
  return <Link to={to} className="w-full h-full transition hover:bg-gray-200 rounded-lg font-normal hover:font-semibold ">
    <li className="w-full">
      {children}
    </li>
  </Link>
}

function MobileSideBar({show} : {show: boolean}) {
  return <div className="lg:hidden transition-all" style={{"display": show? "block" : "none"}}>
    <ul className="bg-gray-50 my-6 pb-8 flex flex-col space-y-3 border-b-2">
      <MobileSideBarItem to="/calculator">
        <MobileSideBarText>승률 계산기</MobileSideBarText>
      </MobileSideBarItem>
      <MobileSideBarItem to="/single-play">
        <MobileSideBarText>컴퓨터와 플레이</MobileSideBarText>
      </MobileSideBarItem>
      <MobileSideBarItem to="/history">
        <MobileSideBarText>대전 기록</MobileSideBarText>
      </MobileSideBarItem>
    </ul>
  </div>
}

export default function SideBar() {
  const [mobileShow, setMobileShow] = useState(false);
  const lgMatch = useMediaQuery("(min-width: 1024px)")
  useEffect(() => {
    if (lgMatch) {
      setMobileShow(false)
    }
  }, [lgMatch])
  return <nav className="h-full w-full">
    <div className="bg-gray-100 lg:bg-gray-50 rounded border-b-2 lg:border-0 border-b-gray-200 dark:bg-gray-800 h-full">
      <div className="overflow-y-auto py-6 px-3 flex justify-between">
        <Link to="/" className="flex items-center">
          <img className="h-7 mr-3" src="https://picsum.photos/30" alt="베스킨라빈스 아이콘"/>
          <h1 className="self-center text-lg lg:text-xl font-semibold whitespace-nowrap transition hover:font-extrabold dark:text-white">써리원 시뮬레이터</h1>
        </Link>
        <button type="button" className="accordion-button lg:hidden" onClick={() => setMobileShow((mobileShow) => !mobileShow)}>
          <img src={MenuIcon} alt="메뉴 아이콘"/>
        </button>
      </div>
      <DesktopSideBar/>
    </div>
    <MobileSideBar show={mobileShow}/>
  </nav>
}
