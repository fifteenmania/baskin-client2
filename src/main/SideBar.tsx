import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
//import {ReactComponent as MenuIcon} from '../asset/icons8-menu.svg'
import GraphIcon from '../asset/graph2.svg'
import SinglePlayIcon from '../asset/singlePlay2.svg'
import HistoryIcon from '../asset/history.svg'

function SideBarIcon({src, alt, ...props}: {src: string, alt: string}) {
  return <img src={src} className="flex-shrink-0 w-6 h-6 transition duration-75" alt={alt}/>
}

function SidebarItemText({children}: {children?: React.ReactNode}) {
  return <span className="flex-1 ml-3 whitespace-nowrap">{children}</span> 
}

function SideBarItem({children, to, ...props}: 
  {to: string, children?: React.ReactNode}) {
    return <Link to={to} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" {...props}>
      {children}
    </Link>
}

export default function SideBar() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  })
  return <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
    <Link to="/" className="flex items-center pl-2.5 mb-5">
      <img className="h-6 mr-3" src="https://picsum.photos/30" alt="베스킨라빈스 아이콘"/>
      <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">베스킨 시뮬레이터</h1>
    </Link>
    <ul className="space-y-2">
      <li className="">
        <SideBarItem to="/calculator">
          <SideBarIcon src={GraphIcon} alt="승률 계산기"/>
          <SidebarItemText>승률 계산기</SidebarItemText>
        </SideBarItem>
      </li>
      <li className="">
        <SideBarItem to="/single-play">
          <SideBarIcon src={SinglePlayIcon} alt="컴퓨터와 플레이"/>
          <SidebarItemText>컴퓨터와 플레이</SidebarItemText>
        </SideBarItem>
      </li>
      <li className="">
        <SideBarItem to="/history">
          <SideBarIcon src={HistoryIcon} alt="대전 기록"/>
          <SidebarItemText>대전 기록</SidebarItemText>
        </SideBarItem>
      </li>
      <li className="inline-flex">
      </li>
    </ul>
  </div>
}
