const express = require("express")
const app = express()
const bodyParser = require("body-parser")
let ejs = require('ejs');
var _ = require('lodash');

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.static("public"))

var aboutContent = "You can achieve more with less. The Five Minute Journal to bring gratitude into your life. This will help you seamlessly create positive habits without investing years in experimenting and research to achieve the same results."
var contactContent = "Email us at abc@xyz.com"
const homeContent = "'Become everything that one is capable of becoming.' -ABRAHAM MASLOW"
const composeContent = "A weekly boost of inspiration sent to your inbox. Join 190,000+ people who receive Intelligent Change Weekly–our curated newsletter of personal development tips on happiness, productivity, relationships, and more."
let post = [{ title: "first", content: "New day new changes" }]

app.get("/", (req, res) => {
    res.render("home", { startingContent: homeContent, posts: post })
})
app.get("/about", (req, res) => {
    res.render("about", { startingContent: aboutContent })
})
app.get("/contact", (req, res) => {
    res.render("contact", { startingContent: contactContent })
})
app.get("/compose", (req, res) => {
    res.render("compose", { startingContent: composeContent })
})
app.post("/compose", (req, res) => {
    var newPost = {
        title: req.body.postTitle,
        content: req.body.postBody
    }
    post.push(newPost)
    res.redirect("/")
})
app.get("/posts/:postName", (req, res) => {
    const requestedTitle = _.lowerCase(req.params.postName)
    console.log(requestedTitle)
    post.forEach(function (post) {
        const storedtitle = _.lowerCase(post.title)
        if (storedtitle === requestedTitle)
            res.render("posts", { title: post.title, content: post.content })
    })

})

app.listen(3000)