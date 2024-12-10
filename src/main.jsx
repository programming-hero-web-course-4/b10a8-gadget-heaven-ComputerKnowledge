import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Error from "./Error/Error";
import Home from "./Home/Home";
import Statistics from "./Statistics/Statistics";
import Dashboard from "./Dashboard/Dashboard";
import Details from "./Details/Details";
import About from "./About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/details/:product_id",
        element: <Details></Details>,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
