import { Router } from "express";

import { getHoldings } from "../controllers/holding.controller.js";

const router = Router();

router.get("/", getHoldings);

export default router;
