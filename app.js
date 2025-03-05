require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
const path = require("path");
app.set("views", path.join(__dirname, "views"));

if (!process.env.MONGO_URI) {
  console.error("MongoDB URI is not defined in the environment variables");
  process.exit(1);
}
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const responseSchema = new mongoose.Schema({
  name: String,
  class: String,
  message: String,
});

const Response = mongoose.model("Response", responseSchema);

app.get("/", (req, res) => {
  res.render("index");
});

// Handle form submission
app.post("/submit", async (req, res) => {
  try {
    const { name, class: classValue, message } = req.body;
    const newResponse = new Response({ name, class: classValue, message });
    await newResponse.save();
    res.json({ success: true, message: "Response saved successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error saving response." });
  }
});

// Route to fetch all responses and render responses.ejs
app.get("/responses", async (req, res) => {
  try {
    const responses = await Response.find({});
    res.render("responses", { responses });
  } catch (err) {
    res.status(500).send("Error retrieving responses.");
  }
});

app.listen(3000, () => {
  console.log(
    "Hey Rockstar!\nWelcome to the ACES MERN Workshop 1.0!\n\nServer started on http://localhost:3000\n"
  );
});
