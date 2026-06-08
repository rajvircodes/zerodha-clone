import Holding from "../models/Holding.js";

export const getHoldings = async (req, res) => {
  try {
    const holdings = await Holding.find();

    res.status(200).json(holdings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
