import { useEffect, useState } from "react";
import { getHoldings } from "../../services/holdings.service";
import HoldingsTable from "../../components/ui/HoldingsTable/HoldingsTable";
import './Holding.css'
function Holdings() {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Holdings | Kite";
    
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
    return<div className="loading">
  Loading Data...
</div>
  }

  if (!holdings.length) {
    return (
      <div style={{ padding: "1rem" }}>
        <h2>No Holdings Found</h2>
        <p>You don't have any stocks in your portfolio yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ marginBottom: "1rem" }}>Holdings</h1>
      <HoldingsTable holdings={holdings} />
    </div>
  );
}

export default Holdings;