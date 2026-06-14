import { NavLink } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2>Kite Dashboard</h2>

      <nav>
        <NavLink to="/">
          Dashboard
        </NavLink>

        <NavLink to="/holdings">
          Holdings
        </NavLink>

        <NavLink to="/positions">
          Positions
        </NavLink>

        <NavLink to="/orders">
          Orders
        </NavLink>

        <NavLink to="/funds">
          Funds
        </NavLink>
      </nav>

    </aside>
  );
}

export default Sidebar;