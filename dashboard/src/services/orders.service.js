import api from "./api";

export const getOrders = async () => {
  const response =
    await api.get("/orders");

  return response.data;
};

export const createOrder = async (
  orderData
) => {
  const response =
    await api.post(
      "/orders",
      orderData
    );

  return response.data;
};

export const deleteOrder = async (
  orderId
) => {
  const response =
    await api.delete(
      `/orders/${orderId}`
    );

  return response.data;
};


export const updateOrder = async (
  orderId,
  orderData
) => {
  const response =
    await api.put(
      `/orders/${orderId}`,
      orderData
    );

  return response.data;
};