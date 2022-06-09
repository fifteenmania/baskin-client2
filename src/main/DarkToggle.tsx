import useDarkMode from "../hooks/useDarkMode"

export default function DarkToggle() {
  const [isDark, setIsDark] = useDarkMode()
  return <label>
    <input type="checkbox" checked={isDark} onChange={e => setIsDark(!isDark)}/>
    Dark mode
  </label>
}