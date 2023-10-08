import { Outlet } from "react-router-dom"
import LayoutWrapper from "./LayoutWrapper"

function YoutubeLayout() {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  )
}

export default YoutubeLayout
