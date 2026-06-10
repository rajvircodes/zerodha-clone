import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";
import holdingRoutes from "./routes/holding.routes.js";
import positionRoutes from './routes/position.routes.js'
const app = express();

app.use(cors());
app.use("/api/health", healthRoutes);
app.use("/api/holdings", holdingRoutes);
app.use('/api/positions', positionRoutes)

export default app;
