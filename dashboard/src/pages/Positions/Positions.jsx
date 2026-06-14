import { useEffect, useState } from "react";

import { getPositions } from "../../services/positions.service";

import PositionsTable from "../../components/ui/PositionsTable/PositionsTable";
import './Position.css'

function Positions() {
  const [positions, setPositions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchPositions =
      async () => {
        try {
          const data =
            await getPositions();

          setPositions(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchPositions();
  }, []);

  useEffect(() => {
    document.title =
      "Positions | Kite";
  }, []);

  if (loading) {
    return <div className="loading">
  Loading Data...
</div>
  }

   if (!positions.length) {
    return (
      <div style={{ padding: "1rem" }}>
        <h2>No Positions Found</h2>
        <p>You don't have any stocks in your portfolio yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h1
        style={{
          marginBottom: "1rem",
        }}
      >
        Positions
      </h1>

      <PositionsTable
        positions={positions}
      />
    </div>
  );
}

export default Positions;