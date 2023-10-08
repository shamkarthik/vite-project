import { Theme } from "@mui/material"
import { ThemeType } from "../redux/slice/themeSlice"
import dark from "./dark"
import light from "./light"

export const themeConfig: { mode: ThemeType; theme: Theme }[] = [
  {
    mode: "light",
    theme: light,
  },
  {
    mode: "dark",
    theme: dark,
  },
]
