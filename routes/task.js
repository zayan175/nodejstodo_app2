const express = require('express')
const action = require('../controllers/task.js');
const isAuthenticated = require('../middlewares/auth.js');

const router = express.Router()

router.post("/new",isAuthenticated,action.newTask)
router.get("/my",isAuthenticated,action.getMyTask)
router.route("/:id",isAuthenticated).put(isAuthenticated,action.updateTask).delete(isAuthenticated,action.deleteTask)




module.exports = router;