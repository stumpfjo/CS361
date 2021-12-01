const express = require("express");
const bodyParser = require("body-parser");
const https = require("https")

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("index.ejs");
});

app.get("/team", function(req, res) {
    res.render("team.ejs");
})

app.get("/map", function(req, res) {
    res.render("map.ejs");
})

app.get("/history", function(req, res) {
    res.render("history.ejs");
})

app.get("/photos", function(req, res) {
    res.render("photos.ejs");
})

app.get("/amenities", function(req, res) {
    res.render("amenities.ejs");
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
  console.log(`http://localhost:${PORT}`);
});