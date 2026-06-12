import { useEffect, useState } from "react";

import {
  getOrders,
  deleteOrder,
} from "../../services/orders.service";

import DataList from "../../components/ui/DataList/DataList";
import OrderForm from "../../components/ui/OrderForm/OrderForm";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = async (
    orderId
  ) => {
    try {
      await deleteOrder(orderId);

      fetchOrders();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <OrderForm
        onOrderCreated={fetchOrders}
      />

      <DataList
        title="Orders"
        items={orders}
        renderItem={(order) => (
          <div
            className="data-item"
            key={order._id}
          >
            <h3>{order.name}</h3>

            <p>Qty: {order.qty}</p>

            <p>Price: ₹{order.price}</p>

            <p>Mode: {order.mode}</p>

            <button
              onClick={() =>
                handleDelete(order._id)
              }
            >
              Delete
            </button>
          </div>
        )}
      />
    </>
  );
}

export default Orders;