import "./Funds.css";

function Funds() {
  const availableMargin =
    125000;

  const usedMargin = 35000;

  const openingBalance =
    160000;

  return (
    <div className="funds-page">
      <h1>Funds</h1>

      <div className="funds-grid">

        <div className="fund-card">
          <p>
            Available Margin
          </p>

          <h2>
            ₹
            {availableMargin.toLocaleString()}
          </h2>
        </div>

        <div className="fund-card">
          <p>
            Used Margin
          </p>

          <h2>
            ₹
            {usedMargin.toLocaleString()}
          </h2>
        </div>

        <div className="fund-card">
          <p>
            Opening Balance
          </p>

          <h2>
            ₹
            {openingBalance.toLocaleString()}
          </h2>
        </div>

      </div>
    </div>
  );
}

export default Funds;