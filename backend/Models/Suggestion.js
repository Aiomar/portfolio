const mongoose = require("mongoose");

const SuggestionSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
  uploadedAt: {
    type: Date,
  },
});

const SuggestionModel = mongoose.model("suggestions", SuggestionSchema);
module.exports = SuggestionModel;
