const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.status(200).send("hello world from git");
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
