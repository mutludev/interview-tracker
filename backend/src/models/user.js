const mongoose = require('mongoose')
const jobSchema = require("./jobSchema");

const user = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  jobs: [jobSchema],
  documents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Document'
  }],
})

module.exports = mongoose.model('User', user)