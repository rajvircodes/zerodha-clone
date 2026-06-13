import api from "./api";


export const getHoldings = async () => {
  const response =
    await api.get("/holdings");

  return response.data;
};