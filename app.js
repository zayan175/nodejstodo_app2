const express = require('express');
const userRouter = require ('./routes/user.js');
const taskRouter = require ('./routes/task.js');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const errorMiddleWare = require('./middlewares/error.js');
const cors = require ('cors')



dotenv.config({
    path: "./data/config.env"
})

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    // origin : [process.env.FRONTEND_URL],
    origin : "*" ,
    // methods : ["GET","POST","PUT","DELETE"],
    // credentials : true,
}))



app.use('/api/v1/users',userRouter)
app.use('/api/v1/tasks',taskRouter)



app.get('/',(req,resp)=>{

    resp.send("Hi Zayan Ahmed Suhail")
});

//using error middleware 

app.use(errorMiddleWare)



module.exports = app;

