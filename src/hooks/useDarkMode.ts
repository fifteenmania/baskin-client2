import { useEffect } from "react"
import usePrefersDarkMode from "./usePrefersDarkMode"
import useLocalStorage from "./useLocalStorage"
import BrowserStorageMapper from "../class/BrowserStorageMapper";

// localstorage 에서 dark-mode 상태를 저장할 key
export const DARK_MODE_KEY = 'dark-mode' as const;
// dark-mode 의 상태를 표현하는 string
export const DARK_MODE = {
  DARK: 'dark',
  LIGHT: 'light'
} as const;

export class DarkModeMapper implements BrowserStorageMapper<boolean> {
  fromJson(json: string | null): boolean|null {
    if (json === null) {
      return null;
    }
    switch (json) {
      case DARK_MODE.DARK:
        return true
      case DARK_MODE.LIGHT:
        return false
      default:
        console.warn("Storage returned an invalid state. returned:", json)
        return null;
    }
  }

  toJson(target: boolean): string {
    return darkBoolToString(target)
  }
}

function darkBoolToString(mode: boolean) {
  return mode? DARK_MODE.DARK : DARK_MODE.LIGHT
}

const mapper = new DarkModeMapper();
export default function useDarkMode() {
  const prefersDarkMode = usePrefersDarkMode()
  const [dark, setDark] = useLocalStorage(DARK_MODE_KEY, prefersDarkMode, mapper)

  useEffect(() => {
    if (window === undefined) {
      console.warn("window is undefined")
      return
    }
    const root = window.document.documentElement
    root.classList.remove(dark? DARK_MODE.LIGHT : DARK_MODE.DARK)
    root.classList.add(darkBoolToString(dark))
  }, [dark])
  return [dark, setDark] as const
}
