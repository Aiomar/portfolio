const mongoose = require("mongoose");

const StackSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  link: {
    type: String,
  },
  logo: {
    type: String,
  },
});

const StackModel = mongoose.model("techstack", StackSchema);
module.exports = StackModel;
