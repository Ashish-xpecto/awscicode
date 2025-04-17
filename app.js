const express = require("express");

const app = express();

// Serve the HTML or send a response
app.get('/', (req, res) => {
  res.status(200).send("hello world from git ok");
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

