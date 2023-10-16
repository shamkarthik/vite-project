import { RouterProvider, createHashRouter } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"
import { routes } from "./routes"

function App() {
  console.log("App")
  const router = createHashRouter(routes)
  return (
    // <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    // </Provider>
  )
}

export default App
