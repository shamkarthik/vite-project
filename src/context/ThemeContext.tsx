import { CssBaseline, ThemeProvider as MUIThemeProvider, Theme } from "@mui/material"
import React, { ReactNode, createContext, useContext, useState } from "react"
import dark from "../theme/dark"
import light from "../theme/light"

type ThemeType = "dark" | "light"

interface ThemeContextProps {
  theme: ThemeType
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
})

export const useTheme = (): ThemeContextProps => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("dark")

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  const themeList: { mode: ThemeType; theme: Theme }[] = [
    {
      mode: "light",
      theme: light,
    },
    {
      mode: "dark",
      theme: dark,
    },
  ]
  const getTheme = (mode: ThemeType) => {
    const selectedTheme = themeList.find((item) => item.mode === mode)
    if (selectedTheme) return selectedTheme.theme
    return light
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MUIThemeProvider theme={getTheme(theme)}>
        <CssBaseline enableColorScheme />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
