const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express(),
  bodyParser = require("body-parser");
const axios = require('axios');
require('dotenv').config();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(cors());


// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });

app.get('/', (req, res) => {
  res.sendFile(__dirname + "../client/build/index.html");
});

app.get('/prices', (request, response) => {
  axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_API_KEY}`)
    .then(res => {
      response.send(res.data)
    })
    .catch(err => {
      console.log("Error fetching data from nomics", err)
    });

});

app.get('/detail', (request, response) => {
  let id = request.param('id');
  let date = request.param('date')
  axios.get(`https://api.nomics.com/v1/currencies/sparkline?key=${process.env.NOMICS_API_KEY}&ids=${id}&start=${date}`)
    .then(res => {
      response.send(res.data)
    })
    .catch(err => {
      console.log("Error fetching data from nomics", err)
    });

});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('App is listening on port ' + port);
});
