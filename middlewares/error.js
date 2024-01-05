// class errorHandler extends Error{
//     constructor(message,statusCode){
//         super(message);
//         this.statusCode = statusCode

//     }

// }
const errorMiddleWare = (err,req,resp,next)=>{


    err.message = err.message || "Internal Server Error";

     return resp.status(404).json({
        success : "false",
        message : err.message,
    });
}


module.exports = errorMiddleWare;
// module.exports.errorHandler = errorHandler;
// module.exports = {
//     errorMiddleWare,
// }


