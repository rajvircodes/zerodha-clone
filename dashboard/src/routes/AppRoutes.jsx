import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout/DashboardLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Holdings from "../pages/Holdings/Holdings";
import Positions from "../pages/Positions/Positions";
import Orders from "../pages/Orders/Orders";
import Funds from "../pages/Funds/Funds";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "holdings",
        element: <Holdings />,
      },
      {
        path: "positions",
        element: <Positions />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "funds",
        element: <Funds />,
      },
    ],
  },
]);

export default router;