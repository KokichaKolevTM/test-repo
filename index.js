const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/create/user", (req, res) => {
  res.send({ res: "created user!"});
});

app.listen(8080, () => {
  console.log("Running on port 8080...");
});

// Export the Express API
module.exports = app;

