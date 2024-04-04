const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const bodyParser = require('body-parser');

const connectDB = require("./config/db")
//dotenv
dotenv.config()

//MONGODB CONNECTION
connectDB()

//Rest Object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(bodyParser.json());

//Routes
app.use('/api/v1/auth', require('./routes/userRoutes'));

//PORT
const PORT = process.env.PORT || 8000

//listen
app.listen(PORT, () => {
    console.log(`Server runnig on PORT ${PORT}`.bgGreen.white)
})