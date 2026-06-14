import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout/DashboardLayout";
import ProtectedRoute from "../components/common/ProtectedRoute/ProtectedRoute";
import PublicRoute from
  "../components/common/PublicRoute/PublicRoute";

import Dashboard from "../pages/Dashboard/Dashboard";
import Holdings from "../pages/Holdings/Holdings";
import Positions from "../pages/Positions/Positions";
import Orders from "../pages/Orders/Orders";
import Funds from "../pages/Funds/Funds";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
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

  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },

  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
]);

export default router;