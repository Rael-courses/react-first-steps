import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PersonPage from "../pages/PersonPage";
import NotFoundPage from "../pages/NotFoundPage";
import PageTemplate from "../pages/PageTemplate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "persons/:personId",
        element: <PersonPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
