import { createTheme } from "@mui/material"

const light = createTheme({
  palette: {
    mode: "light",
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::-webkit-scrollbar": {
          width: "10px",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#f1f1f1",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#888",
          borderRadius: "10px",
        },
      },
    },
  },
})
export default light
