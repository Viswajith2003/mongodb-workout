const express = require("express");
const mongoose = require("mongoose");

const app = new express();
const PORT = process.env.PORT || 3002;

mongoose
  .connect("mongodb://127.0.0.1:27017/mentorbro", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB locally"))
  .catch((err) => console.error("Connection error:", err));

const db = mongoose.connection;

app.get("/", (req, res) => {
  db.collection("Employees")
    .find()
    .toArray()
    .then((result) => {
      console.log("Employees data:", result);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Failed to fetch data" });
    });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
