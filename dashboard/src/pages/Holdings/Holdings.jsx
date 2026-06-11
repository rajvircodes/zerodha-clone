import { useEffect, useState } from "react";

import { getHoldings } from "../../services/holdings.service";

import DataList from "../../components/ui/DataList/DataList";

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
    <DataList
      title="Holdings"
      items={holdings}
      renderItem={(holding) => (
        <div
          className="data-item"
          key={holding._id}
        >
          <h3>{holding.name}</h3>

          <p>Qty: {holding.qty}</p>

          <p>Price: ₹{holding.price}</p>

          <p>Net: {holding.net}</p>
        </div>
      )}
    />
  );
}

export default Holdings;