import "./PositionsTable.css";

function PositionsTable({
  positions,
}) {
  return (
    <div className="table-container">
      <table className="positions-table">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Average</th>
            <th>Current</th>
            <th>P/L</th>
          </tr>
        </thead>

        <tbody>
          {positions.map(
            (position) => {
              const profit =
                (position.price -
                  position.avg) *
                position.qty;

              return (
                <tr
                  key={
                    position._id
                  }
                >
                  <td>
                    <strong>
                      {
                        position.name
                      }
                    </strong>
                  </td>

                  <td>
                    <span className="product-tag">
                      {
                        position.product
                      }
                    </span>
                  </td>

                  <td>
                    {
                      position.qty
                    }
                  </td>

                  <td>
                    ₹
                    {
                      position.avg
                    }
                  </td>

                  <td>
                    ₹
                    {
                      position.price
                    }
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
            }
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PositionsTable;