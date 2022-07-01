import { ReactNode, useState } from "react"
import { Link } from "react-router-dom"
import { SinglePlayIcon } from "asset/assets"
import { GraphIcon } from "asset/assets"
import { HistoryIcon } from "asset/assets"
import { MenuIcon } from "asset/assets"
import DarkToggle from "./DarkToggle"

function SideBarIcon({svg, ...props}: {svg: ReactNode}) {
  return <svg className="w-6 h-6 dark:fill-white" {...props}>
    {svg}
  </svg>
}

function SidebarItemText({children}: {children?: ReactNode}) {
  return <span className="flex-1 ml-3 whitespace-nowrap">{children}</span> 
}

function SideBarItem({children, to, ...props}: 
    {to: string, children?: ReactNode, [x: string]: any}) {
  return <li>
    <Link to={to} className="flex items-center p-2 text-base font-semibold hover:font-bold 
      text-gray-800 
      dark:text-gray-200 
      rounded-lg 
      hover:text-primary-900 
      dark:hover:text-primary-200 
      transition 
      hover:bg-primary-200 
      dark:hover:bg-primary-800" role={"navigation"} {...props}>
      {children}
    </Link>
  </li>
}

function DesktopSideBar() {
  return <div className="hidden lg:block">
    <ul className="space-y-2">
      <SideBarItem to="/calculator">
        <SideBarIcon svg={<GraphIcon/>}/>
        <SidebarItemText>승률 계산기</SidebarItemText>
      </SideBarItem>
      <SideBarItem to="/single-play">
        <SideBarIcon svg={<SinglePlayIcon/>}/>
        <SidebarItemText>컴퓨터와 플레이</SidebarItemText>
      </SideBarItem>
      <SideBarItem to="/history">
        <SideBarIcon svg={<HistoryIcon/>}/>
        <SidebarItemText>대전 기록</SidebarItemText>
      </SideBarItem>
    </ul>
  </div>
}

function MobileSideBarIcon({svg, ...props}: {svg: ReactNode}) {
  return <svg className="w-7 h-7 dark:fill-white" {...props}>
    {svg}
  </svg>
}

function MobileSideBarText({children}: {children?: ReactNode}) {
  return <div className="whitespace-nowrap text-xl p-3">{children}</div> 
}

function MobileSideBarItem({children, to, ...props}: 
    {to: string, children?: ReactNode}) {
  return <Link to={to} className=" w-full h-full hover:bg-gray-200 dark:hover:bg-primary-800 rounded-lg hover:font-semibold " role={"navigation"}>
    <li className="w-full flex flex-row flex-nowrap justify-between align-middle">
      {children}
    </li>
  </Link>
}

function MobileSideBar() {
  return <div className="lg:hidden">
    <ul className="my-5 pb-5 flex flex-col space-y-1 border-b-2">
      <MobileSideBarItem to="/calculator">
        <MobileSideBarText>승률 계산기</MobileSideBarText>
        <MobileSideBarIcon svg={<GraphIcon/>}/>
      </MobileSideBarItem>
      <MobileSideBarItem to="/single-play">
        <MobileSideBarText>컴퓨터와 플레이</MobileSideBarText>
        <MobileSideBarIcon svg={<SinglePlayIcon/>}/>
      </MobileSideBarItem>
      <MobileSideBarItem to="/history">
        <MobileSideBarText>대전 기록</MobileSideBarText>
        <MobileSideBarIcon svg={<HistoryIcon/>}/>
      </MobileSideBarItem>
    </ul>
  </div>
}

function SideBarHeader() {
  return <Link to="/" className="flex items-center ">
    <img className="h-7 w-7 mr-3" src="https://picsum.photos/30" alt="베스킨라빈스 아이콘" loading="lazy"/>
    <h1 className="self-center text-xl font-semibold whitespace-nowrap transition hover:font-extrabold text-gray-800 dark:text-primary-50">써리원 시뮬레이터</h1>
  </Link>
}

export default function SideBar() {
  const [mobileShow, setMobileShow] = useState(false);
  return <nav className="h-full w-full">
    <div className="bg-secondary-100 dark:bg-gray-800 rounded border-b-2 lg:border-0 border-b-200 h-full">
      <div className="overflow-y-auto py-6 mb-4 px-3 flex justify-between">
        <SideBarHeader />
        <button type="button" className="accordion-button lg:hidden" onClick={() => setMobileShow((mobileShow) => !mobileShow)} aria-label="toggle-navigation">
          <svg className="w-6 h-6" role="button">
            <MenuIcon/>
          </svg>
        </button>
      </div>
      <DesktopSideBar/>
      <div className="ml-2 mb-3 lg:mt-6">
        <DarkToggle />
      </div>
    </div>
    {mobileShow? <MobileSideBar /> : null}
  </nav>
}
