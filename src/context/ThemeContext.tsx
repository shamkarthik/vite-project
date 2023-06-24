import { CssBaseline, ThemeProvider as MUIThemeProvider, Theme } from "@mui/material"
import React, { ReactNode, createContext, useContext, useState } from "react"
import dark from "../theme/dark"
import light from "../theme/light"

interface ThemeContextProps {
  theme: "light" | "dark"
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
})

export const useTheme = (): ThemeContextProps => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  const themeList: { mode: "light" | "dark"; theme: Theme }[] = [
    {
      mode: "light",
      theme: light,
    },
    {
      mode: "dark",
      theme: dark,
    },
  ]
  const getTheme = (mode: "light" | "dark") => {
    const selectedTheme = themeList.find((item) => item.mode === mode)
    if (selectedTheme) return selectedTheme.theme
    return light
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MUIThemeProvider theme={getTheme(theme)}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
