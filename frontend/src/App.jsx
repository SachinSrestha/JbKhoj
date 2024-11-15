import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/shared/Navbar.jsx";
import Login from "./components/shared/Login.jsx";
import SignUp from "./components/shared/SignUp.jsx";
import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import Browse from "./pages/Browse.jsx";
import Profile from "./pages/Profile.jsx";
import JobDescription from "./components/shared/JobDescription.jsx";
import AdminCompanies from "./pages/AdminCompanies.jsx";
import AdminJobs from "./pages/AdminJobs.jsx";
import AdminCompanyCreate from "./pages/AdminCompanyCreate.jsx";
import AdminCompanySetup from "./pages/AdminCompanySetup.jsx";
import AdminCompanyEdit from "./pages/AdminCompanyEdit.jsx";
import AdminJobCreate from "./pages/AdminJobCreate.jsx";
import ApplicantsList from "./pages/ApplicantsList.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import useTokenExpirationCheck from "./hooks/useTokenExpirationCheck.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  //admin
  {
    path: "/admin/companies",
    element: (
      <ProtectedRoute>
        <AdminCompanies />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs",
    element: (
      <ProtectedRoute>
        <AdminJobs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/create",
    element: (
      <ProtectedRoute>
        <AdminCompanyCreate />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/setup/:name",
    element: (
      <ProtectedRoute>
        <AdminCompanySetup />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/edit/:name",
    element: (
      <ProtectedRoute>
        <AdminCompanyEdit />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/create",
    element: (
      <ProtectedRoute>
        <AdminJobCreate />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: (
      <ProtectedRoute>
        <ApplicantsList />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  useTokenExpirationCheck();

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
