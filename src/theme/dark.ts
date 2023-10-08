import { createTheme } from "@mui/material"

const dark = createTheme({
  palette: {
    mode: "dark",
    // primary: {
    //   main: "#3f51b5",
    // },
    // secondary: {
    //   main: "#f50057",
    // },
    // background: {
    //   default: "#1a1833",
    //   paper: "#181829",
    // },
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
          backgroundColor: "#1c1c1c",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#2e2e2e",
          borderRadius: "10px",
        },
      },
    },
  },
})
export default dark
