const express = require ('express');
const action = require('../controllers/user.js');
const isAuthenticated = require('../middlewares/auth.js');

const router = express.Router();

router.post('/new',action.register);

router.post('/login',action.login);
router.get('/logout',action.logout);

router.get('/me',isAuthenticated,action.getMyProfile);





module.exports = router;