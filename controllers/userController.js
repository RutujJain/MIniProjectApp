const { hashPassword, comparePassword } = require('../helpers/AuthHelper')
const editUserModel = require('../models/editUserModel')
const userModel = require('../models/userModel')
const JWT = require('jsonwebtoken')

//Register function
const registerController = async (req, res) => {
    try {
        const { name, prn, password } = req.body
        //validation
        if (!name) {
            return res.status(400).send({
                success: false,
                message: 'name is required'
            })
        }
        if (!prn) {
            return res.status(400).send({
                success: false,
                message: 'PRN is required'
            })
        }
        if (!password || password.length < 6) {
            return res.status(400).send({
                success: false,
                message: 'Password is required and 6 character long'
            })
        }

        //existing user
        const existingUser = await userModel.findOne({ prn })
        if (existingUser) {
            return res.status(500).send({
                success: false,
                message: 'User Already Register with this PRN'
            })
        }

        //hashed password 
        const hashedPassword = await hashPassword(password)

        //save user 
        const user = await userModel({ name, prn, password: hashedPassword }).save();
        res.status(201).send({
            success: true,
            message: 'Registration Successfull Please login'
        })
    }
    catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Error in Registerd API',
            error,
        })
    }
}

//Login function

const loginController = async (req, res) => {
    try {
        const { prn, password } = req.body
        //validation
        if (!prn || !password) {
            return res.status(500).send({
                success: false,
                message: 'Please provide PRN NO and Password'
            })
        }

        //find user

        const user = await userModel.findOne({ prn })
        if (!user) {
            return res.status(500).send({
                success: false,
                message: 'User Not Found'
            })
        }

        //Match password
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(500).send({
                success: false,
                message: 'Invalid Username and Password'
            })
        }

        //Token JWT

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '3d'
        })
        //undefined password
        user.password = undefined
        res.status(200).send({
            success: true,
            message: 'Login Successfully',
            token,
            user,


        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Error in login api',
            error
        })
    }
}


//update user

const updateUserController = async (req, res) => {
    try {
        const { name, prn, password } = req.body
        //user Find
        const user = await userModel.findOne({ prn: prn })

        //password validate
        if (password && password.length < 6) {
            return res.status(400).send({
                success: false,
                message: 'Password is required and should be 6 character long'
            })
        }
        const hashedPassword = password ? await hashPassword(password) : undefined
        // updated user
        const updateUser = await userModel.findOneAndUpdate({ prn: prn }, {
            name: name || user.name,
            password: hashedPassword || user.password
        }, { new: true })
        updateUser.password = undefined;
        res.status(200).send({
            success: true,
            message: 'Profile Updated Please login',
            updateUser
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error In User Update Api',
            error
        })
    }

}

const edituserController = async (res, req) => {
    try {
        const { email, phone, ssc, hsc, diploma } = req.body
        //Validation
        if (!email) {
            return res.status(400).send({
                success: false,
                message: 'Email is Required'
            })
        }
        if (!phone || phone.length == 10) {
            return res.status(400).send({
                success: false,
                message: 'Phone is Required'
            })
        }
        if (!ssc) {
            return res.status(400).send({
                success: false,
                message: 'SSC % Required'
            })
        }
        if (!hsc) {
            return res.status(400).send({
                success: false,
                message: 'HSC % Required'
            })
        }
        if (!diploma) {
            return res.status(400).send({
                success: false,
                meessge: 'Diploma % Required'
            })
        }

        //save data
        const editUser = await editUserModel({ email, phone, ssc, hsc, diploma }).save();
        res.status(201).send({
            success: true,
            message: 'Data Updated Successfully'
        })
    }
    catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Error in EditUser API',
            error,
        })
    }
}
module.exports = { registerController, loginController, updateUserController, edituserController }