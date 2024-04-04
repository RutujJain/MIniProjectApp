const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add Name'],
        trim: true //remove white spaces
    },
    prn: {
        type: String,
        required: [true, 'Please Add Prn'],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Please add password'],
        min: 6,
        max: 64,
    },
    role: {
        type: String,
        default: 'user',
    }
}, { timestamps: true }
);
module.exports = mongoose.model('User', userSchema)