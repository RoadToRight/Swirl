import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import CapatchaRoute from "./Router/EmailRouter.js";

const app = express();

app.use(express.json());
app.use(cors())
dotenv.config({path:".env"})
app.use(CapatchaRoute)

app.get("/",() => {
  res.json({
    success:true
  })
}) 

export default app;
