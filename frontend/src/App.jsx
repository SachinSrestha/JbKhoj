import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar.jsx'
import Login from './components/shared/Login.jsx'
import SignUp from './components/shared/SignUp.jsx'
import Home from './pages/Home.jsx'
import Jobs from './pages/Jobs.jsx'
import Browse from './pages/Browse.jsx'
import Profile from './pages/Profile.jsx'
import JobDescription from './components/shared/JobDescription.jsx'
import AdminCompanies from './pages/AdminCompanies.jsx'
import AdminJobs from './pages/AdminJobs.jsx'
import AdminCompanyCreate from './pages/AdminCompanyCreate.jsx'
import AdminCompanySetup from './pages/AdminCompanySetup.jsx'
import AdminCompanyEdit from './pages/AdminCompanyEdit.jsx'
import AdminJobCreate from './pages/AdminJobCreate.jsx'
import ApplicantsList from './pages/ApplicantsList.jsx'
import AdminJobEdit from './pages/AdminJobEdit.jsx'

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
    path:"/description/:id",
    element:<JobDescription/>
  },
  {
    path:"/browse",
    element:<Browse/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  //admin
  {
    path:"/admin/companies",
    element:<AdminCompanies/>
  },
  {
    path:"/admin/jobs",
    element:<AdminJobs/>
  },
  {
    path:"/admin/companies/create",
    element:<AdminCompanyCreate/>
  },
  {
    path:"/admin/companies/setup/:name",
    element:<AdminCompanySetup/>
  },
  {
    path:"/admin/companies/edit/:name",
    element:<AdminCompanyEdit/>
  },
  {
    path:"/admin/jobs/create",
    element:<AdminJobCreate/>
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<ApplicantsList/>
  },
  {
    path:"/admin/jobs/edit/:id",
    element:<AdminJobEdit/>
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
