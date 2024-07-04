import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Main, { mainLoaader } from "./Layouts/Main"
import Dashboard, { dashboardLoader,dashboardAction } from "./Pages/Dashboard"
import { logoutAction } from "./Actions/logout"
import { ToastContainer } from "react-toastify"
import Error  from "./Pages/Error"
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />} loader={mainLoaader} errorElement={<Error/>}>
        <Route path="/" element={<Dashboard />} loader={dashboardLoader} action={dashboardAction} errorElement={<Error/> } />
        <Route path='logout' action={logoutAction} />
        
      </Route>
      
    ) 
  )
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
  )
}

export default App
