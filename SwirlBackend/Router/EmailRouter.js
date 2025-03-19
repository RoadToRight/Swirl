import express from "express"
import { SendEmail,emailLimiter,SendEmailPopup } from "../Controllers/EmailController.js";

let Router =  express.Router();

Router.post("/send/email",emailLimiter,SendEmail)
Router.post("/send/email/popup",emailLimiter,SendEmailPopup)
export default Router;