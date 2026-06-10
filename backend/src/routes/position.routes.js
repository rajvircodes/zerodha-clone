import { Router } from "express";
import { getPositions } from "../controllers/position.controller.js";

const router = Router()

router.get('/', getPositions)

export default router