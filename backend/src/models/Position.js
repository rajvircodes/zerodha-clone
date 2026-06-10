import mongoose from "mongoose";

const positionSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    qty: {
      type: Number,
      required: true,
    },

    avg: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    net: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Position = mongoose.model(
  "Position",
  positionSchema
);

export default Position;