let mongoose = require('mongoose')


let projectSchema = new mongoose.Schema({
  titre: String,
  auteur: String,
  description: String,
  site: String,

});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;