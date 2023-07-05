const express = require("express");
const app = express();

const data = require("./data.json");



// make a request through cors middleware
const cors = require("cors");


app.use(express.json());
app.use(cors());

app.get("/api/devjobs", (req, res) => {
  res.send(data);
});

// Start the server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
