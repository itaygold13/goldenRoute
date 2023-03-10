const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calculation = require('./calculation');
const checkWeather = require("./weather");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(__dirname + '/public'));


// Router
app.get("/", async (req, res) => {
  const weather = await checkWeather(30, 35);
  res.render("index", { weather });
});

app.post("/calculate", async (req, res) => {
  const lon = 35;
  const lat = 30;
  const weather = await checkWeather(lon, lat);
  //const calculationResult = calculation();
  const html = `
    <html>
      <head>
        <title>Takeoff Information</title>
      </head>
      <body>
        ${weather}
        <!--${calculationResult}-->
      </body>
    </html>
  `;
  res.send(html);
});


// Start server
app.listen(3000, () => {
  console.log('App listening on port 3000');
});