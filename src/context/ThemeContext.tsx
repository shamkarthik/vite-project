import {
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
  Theme,
  useMediaQuery,
} from "@mui/material"
import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react"
import { appConfig } from "../app-configs/AppConfig"
import dark from "../theme/dark"
import light from "../theme/light"

type ThemeModeType = "dark" | "light"

interface ThemeContextProps {
  themeMode: ThemeModeType
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeMode: "light",
  toggleTheme: () => {},
})

export const useContextTheme = (): ThemeContextProps => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const browserPrefersMode = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light"
  const [themeMode, setThemeMode] = useState<ThemeModeType>(
    browserPrefersMode ?? appConfig.themeConfig.themeMode
  )
  // useEffect(() => {
  //   if (browserPrefersMode !== themeMode) setThemeMode(browserPrefersMode)
  // }, [browserPrefersMode])
  const toggleTheme = () => {
    setThemeMode((prevThemeMode) => (prevThemeMode === "light" ? "dark" : "light"))
  }
  console.log(browserPrefersMode)
  const themeList: { mode: ThemeModeType; theme: Theme }[] = [
    {
      mode: "light",
      theme: light,
    },
    {
      mode: "dark",
      theme: dark,
    },
  ]
  const theme = useMemo(() => {
    const selectedTheme = themeList.find((item) => item.mode === themeMode)
    if (selectedTheme) return selectedTheme.theme
    return light
  }, [themeMode])

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
