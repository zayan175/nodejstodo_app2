const errorMiddleWare = require("../middlewares/error.js");
const errorHandler = require("../middlewares/error.js");
const task = require("../models/task.js");

const newTask = async (req,resp,next)=>{
    try {
        const{title,description}= req.body;
    

        await task.create({
            title,
            description,
            user : req.user,
        })
        
        
        resp.status(201).json({
            success :"true",
            message : "Task Added Successfully"
        })
        
    } catch (error) {

        next(error)
    }

   
}

const getMyTask = async (req,resp,next)=>{

    try {

        const userid = req.user._id;

        const tasks = await task.find({user: userid})
    
        resp.status(200).json({
            success : "true",
            tasks
        })
    
        
    } catch (error) {
        next(error)
    }

   
}

const updateTask = async (req,resp,next)=>{
   try {
    const tasks = await task.findById(req.params.id)

   if(!tasks)return next(new Error("Task not Found"))



   tasks.isCompleted = !tasks.isCompleted;
   await tasks.save()

    resp.status(200).json({
        success : "true",
        message : "Task Updated Successfully"
    })
    
} catch (error) {

    next(error)
    
   }

}
const deleteTask = async (req,resp,next)=>{

    try {
        const tasks = await task.findById(req.params.id)
   
        if(!tasks)return next (new Error("Task not Found"))
     
        await tasks.deleteOne()
     
         resp.status(200).json({
             success : "true",
             message : "Task Deleted Successfully"
         })
        
    } catch (error) {

        next(error)
        
    }


   

}

module.exports = {
    newTask,
    getMyTask,
    updateTask,
    deleteTask,

}