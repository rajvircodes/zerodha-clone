import { useEffect, useState } from "react";

import { getPositions } from "../../services/positions.service";

function Positions() {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const data = await getPositions();

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

      {positions.map((position) => (
        <div key={position._id}>
          <h3>{position.name}</h3>

          <p>Qty: {position.qty}</p>

          <p>Price: ₹{position.price}</p>

          <p>Product: {position.product}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Positions;