import { Analytics } from "@vercel/analytics/react"
import { RouterProvider, createHashRouter } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"
import { routes } from "./routes"

function App() {
  const router = createHashRouter(routes)
  return (
    // <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
      <Analytics />
    </ThemeProvider>
    // </Provider>
  )
}

export default App
