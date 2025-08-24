const express = require("express");
const cors = require("cors");

const app = express();

// 📌 Call the middleware functions!
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get("/", (req, res) => {
  console.log("GET / visited");
  res.send("Hello!");
});

app.post("/", (req, res) => {
  console.log("POST data:", req.body);
  res.send("Received");
});




module.exports = app;
