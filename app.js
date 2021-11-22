const express = require("express");
const bodyParser = require("body-parser");
const https = require("https")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.send("<h1>Hello world</h1>");
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
  console.log(`http://localhost:${PORT}`);
});