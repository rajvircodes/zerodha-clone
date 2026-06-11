import { useEffect, useState } from "react";
import { getHoldings } from "../../services/holdings.service";

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

      {holdings.map((holding) => (
        <div key={holding._id}>
          <h3>{holding.name}</h3>

          <p>Qty: {holding.qty}</p>

          <p>Price: ₹{holding.price}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Holdings;