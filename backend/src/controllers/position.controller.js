import Position from "../models/Position.js";

export const getPositions = async (
  req,
  res
) => {
  try {
    const positions = await Position.find();

    res.status(200).json(positions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};