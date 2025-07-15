import express from "express";
import morgan from "morgan";
import weatherRouter from "../routes/weatherRoutes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/weather", weatherRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;
