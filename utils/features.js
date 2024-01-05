const jwt = require ('jsonwebtoken')
const sendCookie = (users,resp,message,statusCode= 200)=>{
    const token = jwt.sign({_id: users._id},process.env.JWT_SECRET)

    resp.status(statusCode).cookie("token",token,{
        httpOnly : true,
        maxAge : 15 * 60 *1000,
        samesite : process.env.NODE_ENV === "Development"? "lax" :  "none",
        secure : process.env.NODE_ENV === "Development"? false : true,
    }).json({
        success : true,
        message
        })
}

module.exports =sendCookie;