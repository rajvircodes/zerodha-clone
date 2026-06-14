import "./Topbar.css";

import LogoutButton from "../../common/LogoutButton/LogoutButton";

function Topbar() {
  return (
    <header className="topbar">
      <h3>Dashboard</h3>

      <LogoutButton />
    </header>
  );
}

export default Topbar;