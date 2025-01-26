class ErrorHandler extends Error{

    constructor(message,statusCode){

        super(message);
        this.statusCode = statusCode;

    }

}

export const errorMiddleware = function(err,req,res,next){

    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    if(err.code === 11000){
        let message = `Duplicate ${Object.keys(err.keyValue)} Found` ;
        err = new ErrorHandler(message,400)
    }
    if(err.name === 'CastError'){
        let message = `Invalid ${err.path}` ;
        err = new ErrorHandler(message,400)
    }
    if(err.name === 'JsonWebTokenError'){
        let message = `Token is invalid Try Again!` ;
        err = new ErrorHandler(message,400)
    }
    if(err.name === 'TokenExpiredError'){
        let message = `Token is expired Try Again!` ;
        err = new ErrorHandler(message,400)
    }
    
    let errormessage = err.errors ? Object.values(err.errors).map((errMsg) => errMsg.message).join(" ") : err.message;

    return res.status(err.statusCode).json({
        success:false,
        message:errormessage
    })

}
export default ErrorHandler;