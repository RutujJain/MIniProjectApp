const mongoose = require('mongoose')

const editSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add email'],
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Please Add Phone No'],
        trim: true
    },
    ssc: {
        type: String,
        required: [true, 'Please add  SSC'],
        trim: true
    },
    hsc: {
        type: String,
        required: [true, 'Please add HSC'],
        trim: true
    },
    diploma: {
        type: String,
        required: [true, 'Please add diploma'],
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('editUser', editSchema)
