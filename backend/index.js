const express = require("express");
const app = express();

//Crypto node module to generate a session token
const crypto = require("crypto");
// multer is an npm that handles image uploads
const multer = require("multer");
// dotenv for enviroment variables file
require("dotenv").config();

//CORS
// cors package  to handle cross origin requests
const cors = require("cors");
//Use cors package to allow cross origin requests
app.use(
  cors({
    origin: "https://omaraidiportfolio.vercel.app",
    credentials: true,
  })
);

//REQUEST LIMITER
// this package limits the numbers of request of a specific rout
const rateLimit = require("express-rate-limit");
// limit the rate of request on the login API
const loginlimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
  message:
    "Too many login attempts from this IP, please try again after 15 minutes.",
});

//COOKIES HANDLING
// this package handle cookies
const cookieParser = require("cookie-parser");
//use cookie parser middleware
app.use(cookieParser());

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
mongoose.connect(process.env.DATABASE_URL);

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
  suggestion.uploadedAt = new Date();
  let message = "Your Suggestion sended with succes ! ";

  //insertion query to mongo db
  db.collection("suggestions")
    .insertOne(suggestion)
    .then((result) => {
      res
        .status(201)
        .redirect("https://omaraidiportfolio.vercel.app/?message=" + message);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Could Not insert sugestions" + error.message });
    });
});

//Auth API
app.post("/login", loginlimiter, async (req, res) => {
  const { email, password } = req.body;

  //Verfication if email and password correct
  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password is required" });
  } // validate email with validator js
  else if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "email incorrect is required" });
  }

  //*Session logic handling
  //get user ip adress
  const ip = req.headers["x-forwaded-for"] || req.socket.remoteAddress;
  //generate a unique token using nodejs builtin crypto package
  const token = crypto.randomBytes(16).toString("hex");
  //Session creation
  session = {
    token: token,
    ip: ip,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  //Verification + Authentication
  if (
    email === process.env.DASHBOARD_EMAIL &&
    password === process.env.DASHBOARD_PASSWORD
  ) {
    try {
      await db.collection("sessions").insertOne(session);

      // save the tooken in a cookie
      res.cookie("authToken", token, {
        httpOnly: true, //prevnet client side js script edit
        secure: true,
        maxAge: 24 * 60 * 60 * 1000, // 1 day,
        sameSite: "strict", // this protects from CSRF attacks
      });

      return res.status(200).json({ messag: "success ", token });
    } catch (err) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } else {
    return res.status(401).json({ message: "wrong email or passsword" });
  }
});

//verifiy cookies authToken and db sessions token
app.get("/auth", async (req, res) => {
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const session = await db.collection("sessions").findOne({ token });

    if (!session) {
      return res.status(401).json({ message: "Unauthorized: invalid token " });
    }

    return res.status(200).json({ auth: true });
  } catch (err) {
    return res.status(401).json({ error: err });
  }
});

//Dashboard
//Project Posting handling

//The disk storage engine gives you full control on storing files to disk.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

//call and define multer upload method
const upload = multer({ storage: storage });

//static file serving
app.use(express.static("public"));

//HTTP req with express [method : post]
app.post("/upload-project", upload.single("image"), (req, res) => {
  let project = req.body;

  if (req.file) {
    project.image = `/uploads/${req.file.filename}`;
  }

  let message = "Project Posted with succes !";
  //Insert query to mongodb in protfolio projects collection
  db.collection("projects")
    .insertOne(project)
    .then((result) => {
      res
        .status(201)
        .redirect(
          "https://omaraidiportfolio.vercel.app/dashboard/current-projects/?message=" +
            message
        );
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Could not insert project " + error.message });
    });
});

//Projects
//Project fetching from mongodb : portfolio/projects (db/collection)
app.get("/projects", async (req, res) => {
  try {
    const projects = await ProjectModel.find();

    res.status(200).json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Could not fecth projects " + error.message });
  }
});

//Project Update API
app.patch("/project/:id", upload.single("image"), async (req, res) => {
  try {
    //get id from request parameter
    const { id } = req.params;

    //get request body
    const updatedData = req.body;

    //handle upload image file
    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`;
    }

    //delete empty fileds
    Object.keys(updatedData).forEach((key) => {
      if (updatedData[key] === "" && key !== "image") {
        delete updatedData[key];
      }
    });

    //query to update project in mongodb
    const updatedProject = await ProjectModel.findByIdAndUpdate(
      id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );

    //verifiy if the project exist in the db
    if (!updatedProject) {
      return res.status(404).json({ message: "Cannot find Project" });
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Project Delete API
app.delete("/project/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await ProjectModel.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Project Not Found" });
    }

    return res.status(200).json({ message: "Succes" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

//Suggestions fetching from mongo db
app.get("/suggestions", async (req, res) => {
  try {
    const suggestions = await SuggestionsModel.find();
    res.status(200).json(suggestions);
  } catch (error) {
    res.status(500).json({
      error: "Could not fetch suggestions from mongodb" + error.message,
    });
  }
});

//Suggestion delete
app.delete("/suggestion/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await SuggestionsModel.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Suggestion not found" });
    }

    return res.status(200).json({ message: "Suggestion Deleted Succesfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Tech Stack Form Upload controller
app.post("/techstack", upload.single("logo"), (req, res) => {
  const stack = req.body;

  if (req.file) {
    stack.logo = `/uploads/${req.file.filename}`;
  }

  const message = "Sucess";

  //insert query to mongodb in protfolio techstack collection
  db.collection("techstacks")
    .insertOne(stack)
    .then((result) => {
      res
        .status(201)
        .redirect(
          "https://omaraidiportfolio.vercel.app/dashboard/techstack/?message=" +
            message
        );
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Could not add to tech stack " + error.message });
    });
});

//Tech stack fetching from mongo db protfolio techstack collection
app.get("/techstack", async (req, res) => {
  try {
    let techstack = await StackModel.find();
    res.status(200).json(techstack);
  } catch (error) {
    res.status(500).json({
      error: "could not fetch techstack from mongodb" + error.message,
    });
  }
});

//tech stack delete Api
app.delete("/techstack/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const result = await StackModel.findByIdAndDelete(id);

    if (!result) {
      return res
        .status(404)
        .json({ message: "Failed to find and Delete stack" });
    }
    return res.status(200).json({ message: "Succes" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

//tech stack update Api
app.patch("/techstack/:id", upload.single("logo"), async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    //handle upload image file
    if (req.file) {
      data.logo = `/uploads/${req.file.filename}`;
    }

    //delete empty fileds
    Object.keys(data).forEach((key) => {
      if (data[key] === "" && key !== "logo") {
        delete data[key];
      }
    });

    //query to mongodb to update an item in the tech stack
    const updatedStack = await StackModel.findByIdAndUpdate(id, data);

    //verification and response
    if (!updatedStack) {
      return res
        .status(404)
        .json({ message: "couldnt find item in techStack" });
    }

    return res.status(200).json({ message: "item updated succesfully" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

//serve the backend serever
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port :${PORT}`);
});
