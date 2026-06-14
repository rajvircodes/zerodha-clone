import "./OrdersTable.css";

function OrdersTable({
  orders,
  onEdit,
  onDelete,
}) {
  return (
    <div className="table-container">
      <table className="orders-table">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Mode</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>
                <strong>
                  {order.name}
                </strong>
              </td>

              <td>{order.qty}</td>

              <td>₹{order.price}</td>

              <td
                className={
                  order.mode === "BUY"
                    ? "buy"
                    : "sell"
                }
              >
                {order.mode}
              </td>

              <td>
                <div className="action-buttons">
                  <button
                    className="edit-btn"
                    onClick={() =>
                      onEdit(order)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      onDelete(order._id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;