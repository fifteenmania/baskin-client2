import ToggleButton from "../component/ToggleButton"
import useDarkMode from "../hooks/useDarkMode"

export default function DarkToggle() {
  const [isDark, setIsDark] = useDarkMode()
  return <ToggleButton id="dark-toggle" value={isDark} onClick={() => setIsDark(!isDark)}>
      {isDark? "라이트모드" : "다크모드"}
    </ToggleButton>
}