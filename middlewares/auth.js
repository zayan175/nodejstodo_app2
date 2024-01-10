const user = require("../models/user.js");
const jwt = require ('jsonwebtoken')

const isAuthenticated = async (req,resp,next)=>{
    
    const {token }  = req.cookies;
    console.log(token)

    if(!token){
        return resp.status(404).json({
            success : false,
            message : "Login First",
        });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await user.findById(decoded._id);
    next();
}

module.exports = isAuthenticated;