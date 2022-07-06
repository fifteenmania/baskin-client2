import React from "react";

export function ToggleButtonBack({id, value, onClick, children} : {id: string, value: boolean, onClick: React.MouseEventHandler<HTMLInputElement>, children?: React.ReactNode}) {
  return <label htmlFor={id} className="inline-flex relative items-center cursor-pointer select-none">
      <input type="checkbox" value={JSON.stringify(value)} id={id} className="sr-only peer" onClick={onClick}/>
      <div className="w-11 h-6 
        bg-gray-600 
        dark:bg-primary-400 
        rounded-full 
        peer-checked:after:-translate-x-full 
        peer-checked:after:border-white
        after:absolute after:top-[0.1rem]
        after:left-[1.4rem]
        after:bg-primary-50
        after:border-gray-400
        after:border 
        after:rounded-full 
        after:h-5 
        after:w-5 
        after:transition-all 
        dark:border-gray-600"/>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-primary-200">{children}</span>
  </label>
}

export default function ToggleButton({id, value, onChange, children} : {id: string, value: boolean, onChange: React.ChangeEventHandler<HTMLInputElement>, children?: React.ReactNode}) {
  return <label htmlFor={id} className="inline-flex relative items-center cursor-pointer select-none">
      <input type="checkbox" checked={value} id={id} className="sr-only peer" onChange={onChange}/>
      <div className="w-11 h-6 
        bg-gray-600
        dark:bg-gray-700
        peer-focus:ring-4
        peer-focus:ring-blue-300
        dark:peer-focus:ring-gray-300
        dark:peer-checked:bg-primary-600
        after:content-['']
        after:absolute 
        after:top-0.5
        after:left-[0.1rem]
        peer-checked:after:left-[1.4rem]
        after:bg-white
        after:border-gray-300
        after:bg-primary-50
        after:border
        after:rounded-full
        after:h-5
        after:w-5
        after:transition-all
        dark:border-gray-600
        peer-checked:bg-blue-600
        rounded-full"/>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-primary-200">{children}</span>
  </label>
}