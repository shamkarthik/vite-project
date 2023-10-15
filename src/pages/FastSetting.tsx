import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import SettingsIcon from "@mui/icons-material/Settings"
import ShareIcon from "@mui/icons-material/Share"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import { useContextTheme } from "../context/ThemeContext"
// import { toggleTheme } from "../redux/slice/themeSlice"

export default function FastSetting() {
  // const dispatch = useAppDispatch()
  // const { theme } = useAppSelector((state) => state.theme)
  // const { theme, toggleTheme } = useContext(ThemeContext)
  const { themeMode, toggleTheme } = useContextTheme()
  console.log("rendered")
  //   const [visible, setVisible] = useState(true)

  //   useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       setVisible(true)
  //     }, 5000)

  //     if (visible) {
  //       clearTimeout(timeout)
  //     }

  //     return () => {
  //       clearTimeout(timeout)
  //     }
  //   }, [visible])

  //   const handleHover = () => {
  //     console.log("haver detected")
  //     setVisible(true)
  //   }

  //   const handleLeave = () => {
  //     console.log("leave detected")
  //     setVisible(false)
  //   }
  const switchTheme = () => {
    // dispatch(toggleTheme())
    toggleTheme()
  }

  const actions = [
    { icon: <ShareIcon />, name: "Share", onClick: () => {} },
    {
      icon: themeMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />,
      name: "Switch Theme",
      onClick: switchTheme,
    },
  ]
  return (
    // <Box sx={{}} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        bottom: 16,
        right: 16,
        position: "fixed",
        zIndex: 100,
        // transition: "opacity 0.5s ease-in-out",
        // opacity: visible ? 1 : 0,
      }}
      icon={<SettingsIcon />}
      // onMouseEnter={handleHover}
      // onMouseLeave={handleLeave}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
    // </Box>
  )
}
