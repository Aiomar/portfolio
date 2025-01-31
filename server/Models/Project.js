const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  details: {
    type: String,
  },
  status: {
    type: String,
  },
  link: {
    type: String,
  },
  repo: {
    type: String,
  },
});

const ProjectModel = mongoose.model("projects", ProjectSchema);
module.exports = ProjectModel;
