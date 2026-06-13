import "./OrdersTable.css";

function OrdersTable({
  orders,
  onEdit,
  onDelete,
}) {
  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th>Stock</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Mode</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>{order.name}</td>

            <td>{order.qty}</td>

            <td>₹{order.price}</td>

            <td>{order.mode}</td>

            <td>
              <button
                onClick={() =>
                  onEdit(order)
                }
              >
                Edit
              </button>

              <button
                onClick={() =>
                  onDelete(
                    order._id
                  )
                }
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrdersTable;