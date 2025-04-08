
const express = require("express");
 
const app = express();


// Serve the HTML file
app.get('/', (req, res) => {
  res.status(200).send(hello world);
});

app.listner(8080, () => {
 console.log("server is running on port 3000");
});

 
