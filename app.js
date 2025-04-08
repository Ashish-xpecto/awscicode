src/app.js:
import express from 'express';
import path from 'path';
 
const app = express();
const PORT = process.env.PORT || 3000;
 
// Serve static files from the public directory
app.use(express.static('test'));
 
// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

 
