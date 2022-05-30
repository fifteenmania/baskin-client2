import React from "react"

export function TitleIcon({src, alt, ...props} : {src: string, alt: string}) {
  return <img src={src} alt={alt} {...props}/>
}

export function TitleText({children} : {children: React.ReactNode}) {
  return <span>
    {children}
  </span>
}

export default function Header({src, alt, text} : {src: string, alt: string, text: string}) {
  return <header className="flex mb-4 mt-4">
    <img src={src} alt={alt} className="w-7 h-7 mr-4"/>
    <h2 className='font-bold text-3xl dark:text-white'>{text}</h2>
  </header>
}