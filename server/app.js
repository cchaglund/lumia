// dependencies
const express = require('express');
const path = require('path');

// config
const clientPath = '../client/';
const dataPath = 'data/';

// Create an Express app
const app = express();

// serve frontend files
app.use(express.static(clientPath));

// serve json files from data folder
app.get('/data/:file', (req,res)=>{
  try{
    let data = require('./data/' + req.params.file); // automatically maps .json from missing extension
    res.json(data);
  }catch(e){
    res.json(e);
  }
});

// If no other route rule fulfilled then return index.html
app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, clientPath, 'index.html'));
});

// Start the Express app on port 3000
app.listen(3000,()=>{
  console.log("Lumia running on port 3000!");
});
