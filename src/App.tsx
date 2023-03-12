import Login from "@components/Login";
import Register from "@components/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@layouts/Layouts";
import PageNotFound from "./404/PageNotFound";
import VerifyOtp from "@components/VerifyOtp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [],
    errorElement: <PageNotFound />,
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "verify-otp", element: <VerifyOtp /> },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
