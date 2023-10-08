import { Navigate, RouteObject } from "react-router-dom"
import FlipkartLayout from "./layout/LinkedInLayout"
import YoutubeLayout from "./layout/YoutubeLayout"
import LinkedInRoutes from "./pages/linkedIn/LinkedInRoutes"
import YoutubeRoutes from "./pages/youtube/YoutubeRoutes"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/linkedIn" />,
  },
  {
    path: "",
    element: <FlipkartLayout />,
    children: [...LinkedInRoutes],
  },
  {
    path: "",
    element: <YoutubeLayout />,
    children: [...YoutubeRoutes],
  },
]
