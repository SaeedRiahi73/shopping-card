import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Shop from "../pages/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
    ],
  },
]);
