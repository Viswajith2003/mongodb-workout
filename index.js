const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3002;
const url = "mongodb://localhost:27017";
const dbName = "store";

MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  console.log("MongoDB connected");

  const db = client.db(dbName);

  db.collection("product")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
    });
});

app.get("/", (req, res) => {
  res.send("Welcome to MongoDB with Express");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
