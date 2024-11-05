import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar.jsx'
import Login from './components/shared/Login.jsx'
import SignUp from './components/shared/SignUp.jsx'
import Home from './pages/Home.jsx'
import Jobs from './pages/Jobs.jsx'

const appRouter =createBrowserRouter([
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
    element:<SignUp/>
  },
  {
    path:"/jobs",
    element:<Jobs/>
  },
  {
    path:"/browse",
    element:<SignUp/>
  },

])

function App() {

  return (
    <>
      <RouterProvider router ={appRouter}/>
    </>
  )
}

export default App
