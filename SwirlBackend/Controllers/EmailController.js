import { catchAsyncErrors } from "../MiddleWares/catchAsynError.js";
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import rateLimit from "express-rate-limit";
dotenv.config({path:".env"})

export const emailLimiter = rateLimit({
  windowMs:15 * 60 * 1000,
  max:5,
  message: 'Too many requests, please try again later.',
  handler:function(req,res){
    res.status(429).json({
      message: 'Too many requests, please try again later.',
      remainingTime: '1 minute',
    });
  }
})

export const SendEmail = catchAsyncErrors(async (req, res, next) => {

 const authHeader =  req.headers['authorization'];
 const token = authHeader && authHeader.split(" ")[1];

  let {name,email,comment,lastname,industry,budget,UserComeFrom} = req.body;

  if(!UserComeFrom){
    UserComeFrom = "From Contact Us Directly!"
  }

  if(token === process.env.TOKEN_FRONT){
    console.log(email)
    if(!name || !email || !comment || !lastname || !budget || !industry){
      return  res.status(400).json({
         success:false,
         message:"Please Give Complete Details"
        })
     }
   
       var transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
           user: process.env.email,
           pass: process.env.pass
         }
       });
     
       var mailOptions = {
         from:  process.env.email,
         to:  process.env.email,
         subject: `Message from ${email}`,
         html: `<h3>Sender Name: ${name} ${lastname}</h3>
              <p><strong>Industry:</strong> ${industry}</p>
              <p><strong>Budget:</strong> ${budget}</p>
              <p><strong>Comment:</strong> ${comment}</p>
               <h3><strong>User Come From:</strong> ${UserComeFrom}</h3>
              ` 
       };
     
       transporter.sendMail(mailOptions, function (error, info) {
         if (error) {
           console.log(error);
         } else {
          res.status(200).json({
           success:true,
           message:"Email Sent Successfully We Will Contact You Very Later!"
          })
         }
       });
   
  }else{
    res.json({
      success:false,
      message:"Authentication Failed!"
    })
  }


})

export const SendEmailPopup = catchAsyncErrors(async (req, res, next) => {

  const authHeader =  req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];
 
   let {name,email,comment,UserComeFrom} = req.body;
 

   if(token === process.env.TOKEN_FRONT){
     console.log(email)
     if(!name || !email || !comment){
       return  res.status(400).json({
          success:false,
          message:"Please Give Complete Details"
         })
      }
    
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.email,
            pass: process.env.pass
          }
        });
      
        var mailOptions = {
          from:  process.env.email,
          to:  process.env.email,
          subject: `Message from ${email}`,
          html: `<h3>Sender Name: ${name} </h3>
               <p><strong>Comment:</strong> ${comment}</p>
      <p><strong>User Come From:</strong> ${UserComeFrom}</p>
               ` 
        };
      
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
           res.status(200).json({
            success:true,
            message:"Email Sent Successfully We Will Contact You Very Later!"
           })
          }
        });
    
   }else{
     res.status(400).json({
       success:false,
       message:"Authentication Failed!"
     })
   }
 
 
 })
 