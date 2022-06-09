import { useEffect, useState } from "react";

const queryString = '(prefers-color-scheme: dark)' as const;
export default function usePrefersDarkMode(): boolean {
  const queryMedia = () => window.matchMedia(queryString)
  const [value, setValue] = useState(() => queryMedia().matches)
  useEffect(() => {
    const mediaQuery = queryMedia()
    const handler = () => setValue(mediaQuery.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])
  return value
}