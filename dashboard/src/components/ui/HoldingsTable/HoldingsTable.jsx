import "./HoldingsTable.css";

function HoldingsTable({ holdings }) {
  return (
    <table className="holdings-table">
      <thead>
        <tr>
          <th>Stock</th>
          <th>Qty</th>
          <th>Avg</th>
          <th>Price</th>
          <th>P/L</th>
        </tr>
      </thead>

      <tbody>
        {holdings.map((holding) => {
          const profit =
            (holding.price - holding.avg) *
            holding.qty;

          return (
            <tr key={holding._id}>
              <td>{holding.name}</td>

              <td>{holding.qty}</td>

              <td>₹{holding.avg}</td>

              <td>₹{holding.price}</td>

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

export default HoldingsTable;