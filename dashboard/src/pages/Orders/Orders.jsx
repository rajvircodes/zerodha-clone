import { useEffect, useState } from "react";

import { getOrders } from "../../services/orders.service";
import DataList from "../../components/ui/DataList/DataList";
import OrderForm from "../../components/ui/OrderForm/OrderForm";


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

    <>

    <OrderForm/>
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
        </div>
      )}
    />
    </>
  );
}

export default Orders;