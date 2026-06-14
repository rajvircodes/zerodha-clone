import { useState } from "react";
import { createOrder } from "../../../services/orders.service";
import './OrderForm.css'
function OrderForm({ onOrderCreated }) {
  const [formData, setFormData] = useState({
    name: "",
    qty: "",
    price: "",
    mode: "BUY",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Cast qty and price to numbers if your backend expects them as numbers
      await createOrder({
        ...formData,
        qty: Number(formData.qty),
        price: Number(formData.price),
      });

      onOrderCreated();

      alert("Order Created Successfully");

      // Reset form
      setFormData({
        name: "",
        qty: "",
        price: "",
        mode: "BUY",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to create order. Check console for details.");
    }
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2>Create Order</h2>

      <div className="order-form-grid">
        <label>
          Item Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Quantity:
          <input
            type="number"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            step="0.01"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mode:
          <select
            name="mode"
            value={formData.mode}
            onChange={handleChange}
          >
            <option value="BUY">BUY</option>
            <option value="SELL">SELL</option>
          </select>
        </label>

        <button className="create-order-btn" type="submit">
          Create Order
        </button>
      </div> {/* Fixed: Added missing closing div tag */}
    </form>
  );
}

export default OrderForm;