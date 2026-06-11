import { useEffect, useState } from "react";

import { getHoldings } from "../../services/holdings.service";

function Dashboard() {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const data = await getHoldings();

        setHoldings(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHoldings();
  }, []);

  const totalInvestment = holdings.reduce(
    (acc, holding) =>
      acc + holding.avg * holding.qty,
    0
  );

  const currentValue = holdings.reduce(
    (acc, holding) =>
      acc + holding.price * holding.qty,
    0
  );

  const profitLoss =
    currentValue - totalInvestment;

  return (
    <div>
      <h1>Dashboard Summary</h1>

      <hr />

      <h2>
        Total Holdings: {holdings.length}
      </h2>

      <h2>
        Total Investment:
        ₹{totalInvestment.toFixed(2)}
      </h2>

      <h2>
        Current Value:
        ₹{currentValue.toFixed(2)}
      </h2>

      <h2>
        Profit / Loss:
        ₹{profitLoss.toFixed(2)}
      </h2>
    </div>
  );
}

export default Dashboard;