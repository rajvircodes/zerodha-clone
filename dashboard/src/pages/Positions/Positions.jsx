import { useEffect, useState } from "react";

import { getPositions } from "../../services/positions.service";

import DataList from "../../components/ui/DataList/DataList";

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
    <DataList
      title="Positions"
      items={positions}
      renderItem={(position) => (
        <div
          className="data-item"
          key={position._id}
        >
          <h3>{position.name}</h3>

          <p>Qty: {position.qty}</p>

          <p>Price: ₹{position.price}</p>

          <p>Product: {position.product}</p>
        </div>
      )}
    />
  );
}

export default Positions;