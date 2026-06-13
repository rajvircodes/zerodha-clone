import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  getOrders,
  createOrder,
  deleteOrder,
  updateOrder,
} from "../controllers/order.controller.js";

const router = Router();

router.get(
  "/",
  authMiddleware,
  getOrders
);

router.post(
  "/",
  authMiddleware,
  createOrder
);

router.put(
  "/:id",
  authMiddleware,
  updateOrder
);

router.delete(
  "/:id",
  authMiddleware,
  deleteOrder
);

export default router;
