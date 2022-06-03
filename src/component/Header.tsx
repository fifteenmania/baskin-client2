import React from "react"
import { Link } from "react-router-dom"

export function TitleText({children} : {children: React.ReactNode}) {
  return <span>
    {children}
  </span>
}

export default function Header({src, alt, text, to} : {src: string, alt: string, text: string, to: string}) {
  return <header className="my-6">
    <Link to={to} className="flex align-baseline w-fit">
      <img src={src} alt={alt} className="w-9 h-9 mr-5 drop-shadow-xl"/>
      <h2 className='font-bold text-2xl dark:text-white'>{text}</h2>
    </Link>
  </header>
}