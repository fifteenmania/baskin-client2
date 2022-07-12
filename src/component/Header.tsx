import React, { ReactNode } from "react"
import { Link } from "react-router-dom"

export function TitleText({children} : {children: React.ReactNode}) {
  return <span>
    {children}
  </span>
}

export default function Header({svg, text, to} : {svg: ReactNode, text: string, to: string}) {
  return <header className="my-6">
    <Link to={to} className="flex align-baseline w-fit">
      <svg className="w-9 h-9 mr-5 drop-shadow-xl dark:fill-white">
        {svg}
      </svg>
      <h2 className='font-bold text-2xl'>{text}</h2>
    </Link>
  </header>
}