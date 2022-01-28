const express = require("express")
const app = express()
const bodyParser = require("body-parser")
let ejs = require('ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.static("public"))

var aboutContent = "This is a daily journal app to track your habits, feelings, changes and thoughts"
var contactContent = "Email us at abc@xyz.com"
const homeContent = "Daily"

app.get("/", (req, res) => {
    res.render("home", { homeStartingContent: homeContent })
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/contact", (req, res) => {
    res.render("contact")
})

app.listen(3000)