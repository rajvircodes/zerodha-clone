import "./HoldingsTable.css";

function HoldingsTable({
  holdings,
}) {
  return (
    <div className="table-container">

    
    <table className="holdings-table">
      <thead>
        <tr>
          <th>Stock</th>
          <th>Quantity</th>
          <th>Average</th>
          <th>Current</th>
          <th>P/L</th>
        </tr>
      </thead>

      <tbody>
        {holdings.map((holding) => {
          const profit =
            (holding.price -
              holding.avg) *
            holding.qty;

          return (
            <tr key={holding._id}>
              <td>
                <strong>
                  {holding.name}
                </strong>
              </td>

              <td>
                {holding.qty}
              </td>

              <td>
                ₹{holding.avg}
              </td>

              <td>
                ₹{holding.price}
              </td>

              <td
                className={
                  profit >= 0
                    ? "profit"
                    : "loss"
                }
              >
                ₹
                {profit.toFixed(
                  2
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default HoldingsTable;