const express = require("express")
const app = express()
const bodyParser = require("body-parser")
let ejs = require('ejs');
var _ = require('lodash');
const { truncate } = require("lodash");

//connect datbase
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blogPostDB', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.static("public"))

const blogPostSchema = {
    title: String,
    content: String
}

const blogPost = mongoose.model("blogPost", blogPostSchema)

var aboutContent = "You can achieve more with less. The Five Minute Journal to bring gratitude into your life. This will help you seamlessly create positive habits without investing years in experimenting and research to achieve the same results."
var contactContent = "Email us at abc@xyz.com"
const homeContent = "'Become everything that one is capable of becoming.' -ABRAHAM MASLOW"
const composeContent = "A weekly boost of inspiration sent to your inbox. Join 190,000+ people who receive Intelligent Change Weekly–our curated newsletter of personal development tips on happiness, productivity, relationships, and more."
let post = []

app.get("/", (req, res) => {
    blogPost.find({}, function (err, foundPosts) {
        res.render("home", { startingContent: homeContent, posts: foundPosts })
    })

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
    const post = new blogPost({
        title: req.body.postTitle,
        content: req.body.postBody
    })
    post.save(function (err) {
        if (!err) {
            res.redirect("/");
        }
    })
})
app.get("/posts/:postId", (req, res) => {
    const requestedPostId = req.params.postId

    blogPost.findOne({ _id: requestedPostId }, function (err, post) {
        res.render("posts", { title: post.title, content: post.content })
    })

})

app.listen(3000)