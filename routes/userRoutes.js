const express = require('express')
const { registerController, loginController, updateUserController, edituserController } = require('../controllers/userController')

//router object

const router = express.Router()

//routes
//Register ||post
router.post('/register', registerController)

//login ||POST

router.post('/login', loginController)

//Update  ||Put
router.put('/update-user', updateUserController)

//EditUser ||POST

router.post('/edituser', edituserController)

//export
module.exports = router