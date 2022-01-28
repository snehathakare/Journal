const express = require("express")
const app = express()
const bodyParser = require("body-parser")
let ejs = require('ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(3000)