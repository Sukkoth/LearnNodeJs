const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var multer = require('multer');
var forms = multer();

//import the blogs;
var blogs = require('../trial/blogs.js');

//set view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(forms.array());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('blog/index', { title: "Home", blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: "About" });
});

app.get('/blogs/create', (req, res) => {
    res.render('blog/create', { title: "Create" });
});

app.post('/blogs/store', (req, res) => {
    blogs.push(req.body);
    res.redirect('/');
});

app.post('/blogs/:blog_index/delete', (req, res) => {
    blogs.splice(req.params.blog_index, 1);
    res.redirect('/');
});

app.get('/blogs/:blog_index/edit', (req, res) => {
    res.render('blog/edit', { blog: blogs[req.params.blog_index], title: 'Edit blog', blog_index: req.params.blog_index });
});

app.post('/blogs/:blog_index/update', (req, res) => {
    blogs[req.params.blog_index].title = req.body.title;
    blogs[req.params.blog_index].text = req.body.text
    res.redirect('/');
});

app.use((req, res) => {
    res.render('404', { title: "404" });
})

app.listen(4000, () => {
    console.log(`Server started on port ${4000}`);
});
