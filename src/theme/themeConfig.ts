import { Theme } from "@mui/material"
import { ThemeModeType } from "../context/ThemeContext"
import dark from "./dark"
import light from "./light"

export const themeConfig: { mode: ThemeModeType; theme: Theme }[] = [
  {
    mode: "light",
    theme: light,
  },
  {
    mode: "dark",
    theme: dark,
  },
]
