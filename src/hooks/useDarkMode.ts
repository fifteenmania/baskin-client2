import { useEffect } from "react"
import usePrefersDarkMode from "./usePrefersDarkMode"
import useLocalStorage from "./useLocalStorage"

// localstorage 에서 dark-mode 상태를 저장할 key
export const DARK_MODE_KEY = 'dark-mode' as const;
// dark-mode 의 상태를 표현하는 string
export const DARK_MODE = {
  DARK: 'dark',
  LIGHT: 'light'
} as const;

export const valToString = (val: boolean) => val? DARK_MODE.DARK : DARK_MODE.LIGHT;
export const stringToVal = (str: string) => str === DARK_MODE.DARK;

export default function useDarkMode() {
  const prefersDarkMode = usePrefersDarkMode()
  const [dark, setDark] = useLocalStorage<boolean>(DARK_MODE_KEY, prefersDarkMode, valToString, stringToVal)

  useEffect(() => {
    if (window === undefined) {
      console.warn("window is undefined")
      return
    }
    const root = window.document.documentElement
    root.classList.remove(dark? DARK_MODE.LIGHT : DARK_MODE.DARK)
    root.classList.add(valToString(dark))
  }, [dark])
  return [dark, setDark] as const
}
