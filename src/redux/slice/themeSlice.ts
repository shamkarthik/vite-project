import { createSlice } from "@reduxjs/toolkit"

type ThemeModeType = "dark" | "light"

export interface ThemeState {
  theme: ThemeModeType
}

const initialState: ThemeState = {
  theme: "light",
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light"
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
