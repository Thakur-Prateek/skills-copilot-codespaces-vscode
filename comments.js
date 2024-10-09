// Create web server
// Create a route that responds to GET requests to the /comments URL
// This route should read the comments.json file and respond with the contents of the file
// Use the fs module to read the file
// Send the contents of the file as a JSON response
// Start the server

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 4001;

app.get('/comments', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Unable to read comments.json file');
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});