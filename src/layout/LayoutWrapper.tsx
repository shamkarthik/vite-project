import { CssBaseline, ThemeProvider } from "@mui/material"
import { ReactNode, useMemo } from "react"
import FastSetting from "../pages/FastSetting"
import Header from "../pages/Header"
import { useAppSelector } from "../redux/hooks"
import light from "../theme/light"
import { themeConfig } from "../theme/themeConfig"

function LayoutWrapper({ children }: { children: ReactNode }) {
  console.log("rendered Layoutwrapper")
  const { theme } = useAppSelector((state) => state.theme)
  const selectedThemeConfig = useMemo(() => {
    const selectedTheme = themeConfig.find((item) => item.mode === theme)
    if (selectedTheme) return selectedTheme.theme
    return light
  }, [theme])

  return (
    <ThemeProvider theme={selectedThemeConfig}>
      <CssBaseline enableColorScheme />
      <Header />
      <FastSetting />
      {children}
    </ThemeProvider>
  )
}

export default LayoutWrapper
