const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.post('/', function(req, res) { 
  res.setHeader('Payload-Data', 'it works!') 
  res.status(200)  
  res.send('Data can be created using this method POST')
  console.log('POST was called');
});
app.get('/', function (req, res) {
  res.setHeader('Payload-Data', 'it works!')
  res.status(200)
  res.send('GET is used to read information.')
  console.log(res.getHeader('Payload-Data', 'it works!'));
});

app.put('/', function (req, res) {
    res.setHeader('Payload-Data', 'it works!')
    res.status(200)
    res.send('Use this (PUT) to update information')
    console.log("PUT was called"); 
});

app.delete('/', function (req, res) {
    res.setHeader('Payload-Data', 'it works!')
    res.status(404)
    res.send('Error: 404--Sorry little monster, no cookies here')
    console.log("DELETE was called");
});

app.listen(3006, () => {
    console.log('Simple Server is running on 3006');
});

