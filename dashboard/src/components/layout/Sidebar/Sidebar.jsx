import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Kite Dashboard</h2>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/holdings">Holdings</Link>
        <Link to="/positions">Positions</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/funds">Funds</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;