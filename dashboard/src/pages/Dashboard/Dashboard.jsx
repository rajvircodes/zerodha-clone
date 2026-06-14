import { useEffect, useState } from "react";

import { getHoldings } from "../../services/holdings.service";

import SummaryCard from "../../components/ui/SummaryCard/SummaryCard";

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

  return (
    <div>
      <h1
        style={{
          marginBottom:
            "2rem",
        }}
      >
        Dashboard
      </h1>

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",

          gap: "1.5rem",
        }}
      >
        <SummaryCard
          title="Total Holdings"
          value={
            holdings.length
          }
        />

        <SummaryCard
          title="Investment"
          value={`₹${totalInvestment.toFixed(
            2
          )}`}
        />

        <SummaryCard
          title="Current Value"
          value={`₹${currentValue.toFixed(
            2
          )}`}
        />

        <SummaryCard
          title="Profit / Loss"
          value={`₹${profitLoss.toFixed(
            2
          )}`}
        />
      </div>
    </div>
  );
}

export default Dashboard;