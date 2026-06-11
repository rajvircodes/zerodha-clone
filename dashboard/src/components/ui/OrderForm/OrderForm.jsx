import { useState } from "react";

import {
  createOrder,
} from "../../../services/orders.service";

function OrderForm() {
  const [formData, setFormData] =
    useState({
      name: "",
      qty: "",
      price: "",
      mode: "BUY",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createOrder(formData);

      alert(
        "Order Created Successfully"
      );

      setFormData({
        name: "",
        qty: "",
        price: "",
        mode: "BUY",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Stock Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="qty"
        placeholder="Quantity"
        value={formData.qty}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />

      <select
        name="mode"
        value={formData.mode}
        onChange={handleChange}
      >
        <option value="BUY">
          BUY
        </option>

        <option value="SELL">
          SELL
        </option>
      </select>

      <button type="submit">
        Create Order
      </button>
    </form>
  );
}

export default OrderForm;