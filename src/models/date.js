let mongoose = require('mongoose')

let dateSchema = new mongoose.Schema({
  date: Date
})

module.exports = mongoose.model('date', dateSchema);