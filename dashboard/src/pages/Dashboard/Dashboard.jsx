import { useEffect, useState } from "react";

import { getHoldings } from "../../services/holdings.service";

import SummaryCard from "../../components/ui/SummaryCard/SummaryCard";

import "./Dashboard.css";

function Dashboard() {
  const [holdings, setHoldings] =
    useState([]);

  useEffect(() => {
    const fetchHoldings =
      async () => {
        try {
          const data =
            await getHoldings();

          setHoldings(data);
        } catch (error) {
          console.error(error);
        }
      };

    fetchHoldings();
  }, []);

  const totalInvestment =
    holdings.reduce(
      (acc, holding) =>
        acc +
        holding.avg *
          holding.qty,
      0
    );

  const currentValue =
    holdings.reduce(
      (acc, holding) =>
        acc +
        holding.price *
          holding.qty,
      0
    );

  const profitLoss =
    currentValue -
    totalInvestment;

  const topPerformer =
    holdings.reduce(
      (best, current) => {
        const currentProfit =
          (current.price -
            current.avg) *
          current.qty;

        const bestProfit =
          (best.price -
            best.avg) *
          best.qty;

        return currentProfit >
          bestProfit
          ? current
          : best;
      },
      holdings[0] || {}
    );

  return (
    <div className="dashboard-page">

      <h1>Dashboard</h1>

      <div className="summary-grid">
        <SummaryCard
          title="Total Holdings"
          value={holdings.length}
        />

        <SummaryCard
          title="Investment"
          value={`₹${totalInvestment.toFixed(
            0
          )}`}
        />

        <SummaryCard
          title="Current Value"
          value={`₹${currentValue.toFixed(
            0
          )}`}
        />

        <SummaryCard
          title="Profit / Loss"
          value={`₹${profitLoss.toFixed(
            0
          )}`}
        />
      </div>

      <div className="dashboard-sections">

        <div className="dashboard-card">
          <h2>
            Portfolio Overview
          </h2>

          <p>
            Total Stocks:
            {" "}
            {holdings.length}
          </p>

          <p>
            Current Value:
            {" "}
            ₹
            {currentValue.toFixed(
              0
            )}
          </p>

          <p>
            Net Profit:
            {" "}
            ₹
            {profitLoss.toFixed(
              0
            )}
          </p>
        </div>

        <div className="dashboard-card">
          <h2>
            Top Performer
          </h2>

          <p>
            {topPerformer.name ||
              "N/A"}
          </p>

          <p>
            Qty:
            {" "}
            {topPerformer.qty ||
              0}
          </p>
        </div>

        <div className="dashboard-card">
          <h2>
            Recent Activity
          </h2>

          <ul>
            <li>
              Order Created
            </li>
            <li>
              Holdings Updated
            </li>
            <li>
              Dashboard Login
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;