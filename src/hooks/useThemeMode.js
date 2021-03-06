import { useState } from "react"

export const useThemeMode = () => {
  const [theme, setTheme] = useState("default")

  const toggleTheme = () => {
    if (theme === "default") {
      setTheme("dark")
      return
    }
    setTheme("default")
  }

  return { theme, toggleTheme }
}
