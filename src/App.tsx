import { Provider } from "react-redux"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { store } from "./redux/store"
import { routes } from "./routes"

function App() {
  console.log("App")
  const router = createBrowserRouter(routes)
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
