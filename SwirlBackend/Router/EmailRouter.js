import express from "express"
import { SendEmail,emailLimiter } from "../Controllers/EmailController.js";

let Router =  express.Router();

Router.post("/send/email",emailLimiter,SendEmail)
export default Router;