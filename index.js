const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

console.log("hi, from whatever this is");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/", (req, res) => {
  res.send("haha, it works. docker is ");
});

const EntrySchema = new mongoose.Schema({
  text: String,
  date: { type: Date, default: Date.now },
});

const Entry = mongoose.model("Entry", EntrySchema);

app.get("/entry", async (req, res) => {
  try {
    const entry = new Entry({ text: "This is an entry by Victor" });
    await entry.save();
    res.send("Entry added!");
  } catch (err) {
    res.status(500).send("Error occurred");
  }
});

const runServer = async () => {
  try {
    await mongoose.connect("mongodb://mongodb:27017/mydatabase", {});
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log(`Server started on port:` + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

runServer();
