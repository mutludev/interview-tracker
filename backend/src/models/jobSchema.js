const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    company: {
        type: String,
        required: [true,"Company name is required"]
    },
    title: {
        type: String,
        required: [true,"Title is required"]
    },
    status: ['wishlist' , 'applied' , 'rejected' , 'accepted'],
    url: String,
    description: String,
    notes: String,
    deadline: Date
})

module.exports = jobSchema