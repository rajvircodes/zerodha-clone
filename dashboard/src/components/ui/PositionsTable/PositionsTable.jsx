import "./PositionsTable.css";

function PositionsTable({
  positions,
}) {
  return (
    <table className="positions-table">
      <thead>
        <tr>
          <th>Stock</th>
          <th>Product</th>
          <th>Qty</th>
          <th>Avg</th>
          <th>Price</th>
          <th>P/L</th>
        </tr>
      </thead>

      <tbody>
        {positions.map((position) => {
          const profit =
            (position.price -
              position.avg) *
            position.qty;

          return (
            <tr key={position._id}>
              <td>{position.name}</td>

              <td>
                {position.product}
              </td>

              <td>{position.qty}</td>

              <td>
                ₹{position.avg}
              </td>

              <td>
                ₹{position.price}
              </td>

              <td
                className={
                  profit >= 0
                    ? "profit"
                    : "loss"
                }
              >
                ₹{profit.toFixed(2)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PositionsTable;