import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "@components/Login";
import Register from "@components/Register";
import { useCountStore } from "./zustand/Count";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@layouts/Layouts";
import PageNotFound from "./404/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [],
    errorElement: <PageNotFound />,
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
