const express = require("express");
const app = express();
require("dotenv").config();

//CORS
// cors package  to handle cross origin requests
const cors = require("cors");
//Use cors package to allow cross origin requests
app.use(cors());

//BODY PARSER
const bodyParser = require("body-parser");
//body parser package
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//validator package for validating email
const validator = require("validator");

//error node module
const { error } = require("console");

// path node module to handle files storing
const path = require("path");

//MONGODB CONNECTION
//Connecting to mongo db and verification
// requiring mongoose package
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error : "));
db.once("open", () => {
  console.log("connected to mongo db");
});

//Models required
const SuggestionsModel = require("./Models/Suggestion");
const StackModel = require("./Models/Stack");
const ProjectModel = require("./Models/Project");
const { inflate } = require("zlib");

//Portfolio APIs
//Suggestions form handling
app.post("/suggestion", (req, res) => {
  //Insertion de suggestion dans la base portfolio/suggestions (Mongodb)
  let suggestion = req.body;

  //* delete all ocuurence of space in phone
  let phone = suggestion.phone.toString();
  phone = phone.replaceAll(" ", "");
  suggestion.phone = phone;

  suggestion.uploadedAt = new Date();
  let message = "Your Suggestion sended with succes ! ";

  //insertion query to mongo db
  db.collection("suggestions")
    .insertOne(suggestion)
    .then((result) => {
      res
        .status(201)
        .redirect("https://aidiomar.vercel.app/?message=" + message);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Could Not insert sugestions" + error.message });
    });
});

//serve the backend serever
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port :${PORT}`);
});
