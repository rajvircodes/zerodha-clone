import { useEffect, useState } from "react";

import { getHoldings } from "../../services/holdings.service";

import HoldingsTable from "../../components/ui/HoldingsTable/HoldingsTable";

function Holdings() {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const data = await getHoldings();

        setHoldings(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Holdings</h1>

      <HoldingsTable
        holdings={holdings}
      />
    </div>
  );
}

export default Holdings;