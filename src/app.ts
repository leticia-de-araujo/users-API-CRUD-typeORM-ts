import "reflect-metadata";
import express from "express";
import "dotenv/config";
import userRoutes from "./routers/users.routes";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

export default app;
