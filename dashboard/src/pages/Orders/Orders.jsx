import { useEffect, useState } from "react";

import { getOrders } from "../../services/orders.service";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();

        setOrders(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Orders</h1>

      {orders.map((order) => (
        <div key={order._id}>
          <h3>{order.name}</h3>

          <p>Qty: {order.qty}</p>

          <p>Price: ₹{order.price}</p>

          <p>Mode: {order.mode}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Orders;