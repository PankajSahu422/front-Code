import { createBrowserRouter, RouterProvider, appRouter } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import  Home  from "./components/Home"



const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  
])
function App() {

  return (
    <div>
     <RouterProvider router = {Router}/>
    </div>
  );
}

export default App
