import { Router } from "express";

import { getOrders, createOrder, deleteOrder } from "../controllers/order.controller.js";

const router = Router();

router.get("/", getOrders);
router.post("/", createOrder);
router.delete('/:id', deleteOrder);

export default router;