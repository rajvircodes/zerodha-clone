import { useEffect, useState } from "react";
import { getOrders, deleteOrder, updateOrder } from "../../services/orders.service";
import OrderForm from "../../components/ui/OrderForm/OrderForm";
import OrdersTable from "../../components/ui/OrdersTable/OrdersTable";
import './Order.css'

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
    document.title = "Orders | Kite";
    fetchOrders();
  }, []); 

  const handleDelete = async (orderId) => {
    try {
      await deleteOrder(orderId);
      fetchOrders(); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (order) => {
    const newPrice = prompt("Enter New Price", order.price);
    if (!newPrice) return;

    const orderId = order._id || order.id; 

    try {
      await updateOrder(orderId, {
        ...order,
        price: Number(newPrice),
      });
      fetchOrders(); 
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div className="loading">
  Loading Data...
</div>
  }
if (!orders.length) {
  return (
    <h2>
      No order found
    </h2>
  );
}
  

  return (
    <div>
      <h1 style={{ marginBottom: "1rem" }}>Orders</h1>
      <OrderForm onOrderCreated={fetchOrders} />
      <OrdersTable orders={orders} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default Orders;