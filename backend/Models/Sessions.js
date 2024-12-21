const mongoose = require("mongoose");

const SessionsSchema = new mongoose.Schema({
  token:{
    type: String,
  },
  ipAdress:{
    type: String,
  },
  createdAt:{
    type: Date,
  },
  updatedAt:{
    type: Date,
  }
})

const SessionsModel = mongoose.model("sessions", SessionsSchema);
module.exports = SessionsModel;