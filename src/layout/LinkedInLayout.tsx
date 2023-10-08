import { Outlet } from "react-router-dom"
import LayoutWrapper from "./LayoutWrapper"

function LinkedInLayout() {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  )
}

export default LinkedInLayout
