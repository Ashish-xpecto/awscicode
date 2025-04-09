const express = require("express");

const app = express();

// Serve the HTML or send a response
app.get('/', (req, res) => {
  res.status(200).send("hello world from git");
});

// Start the server
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
