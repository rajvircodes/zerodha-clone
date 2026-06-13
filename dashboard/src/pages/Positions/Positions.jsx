import { useEffect, useState } from "react";

import { getPositions } from "../../services/positions.service";

import PositionsTable from "../../components/ui/PositionsTable/PositionsTable";

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

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Positions</h1>

      <PositionsTable
        positions={positions}
      />
    </div>
  );
}

export default Positions;