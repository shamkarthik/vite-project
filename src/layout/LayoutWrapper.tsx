import { ReactNode } from "react"
import FastSetting from "../pages/FastSetting"
import Header from "../pages/Header"

function LayoutWrapper({ children }: { children: ReactNode }) {
  console.log("rendered Layoutwrapper")
  // const { theme } = useAppSelector((state) => state.theme)
  // const selectedThemeConfig = useMemo(() => {
  //   const selectedTheme = themeConfig.find((item) => item.mode === theme)
  //   if (selectedTheme) return selectedTheme.theme
  //   return light
  // }, [theme])

  return (
    <>
      <Header />
      <FastSetting />
      {children}
    </>
  )
}

export default LayoutWrapper
