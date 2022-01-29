const express = require("express")
const app = express()
const bodyParser = require("body-parser")
let ejs = require('ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.static("public"))

var aboutContent = "You can achieve more with less. The Five Minute Journal to bring gratitude into your life. This will help you seamlessly create positive habits without investing years in experimenting and research to achieve the same results."
var contactContent = "Email us at abc@xyz.com"
const homeContent = "'Become everything that one is capable of becoming.' -ABRAHAM MASLOW"
const composeContent = "A weekly boost of inspiration sent to your inbox. Join 190,000+ people who receive Intelligent Change Weekly–our curated newsletter of personal development tips on happiness, productivity, relationships, and more."


app.get("/", (req, res) => {
    res.render("home", { startingContent: homeContent })
})
app.get("/about", (req, res) => {
    res.render("about", { startingContent: aboutContent })
})
app.get("/contact", (req, res) => {
    res.render("contact", { startingContent: contactContent })
})
app.get("/new", (req, res) => {
    res.render("compose", { startingContent: composeContent })
})

app.listen(3000)