const router = require('express').Router();
const Blog = require('../../app/models/Blog');

router.get('/', async (req, res) => {
    var blogs = await Blog.find().sort({ createdAt: -1 });
    res.render('blog/index', { title: "Home", blogs });
});

router.get('/create', (req, res) => {
    res.render('blog/create', { title: "Create" });
});

router.post('/store', (req, res) => {
    Blog.create(req.body, (error) => {
        if (error) {
            res.redirect('/create');
        } else {
            res.redirect('/blogs');
        }
    });

});

router.get('/show/:blogId', (req, res) => {
    Blog.findById(req.params.blogId, (error, blog) => {
        if (error) {
            console.log(error);
        }
        res.render('blog/show', { blog, title: 'blog.title', blog_index: req.params.blogId });
    });
});

router.get('/edit/:blogId', (req, res) => {
    Blog.findById(req.params.blogId, (error, blog) => {
        if (error) {
            console.log(error);
        }
        res.render('blog/edit', { blog, title: 'Edit blog', blog_index: req.params.blogId });
    });
});

router.post('/update/:blogId', (req, res) => {
    Blog.findByIdAndUpdate(req.param.blogId, {
        $set: {
            title: req.body.title,
            sub_title: req.body.sub_title,
            text: req.body.text
        }
    }, (error, data) => {
        if (error) {
            console.log("ERROR UPDATING DATA", error);
        } else {
            res.redirect('/');
        }
    })
});

router.post('/delete/:blogId', (req, res) => {
    Blog.findByIdAndDelete(req.params.blogId, (error) => {
        if (error) {
            console.log("ERROR DELETING DATA");
            res.redirect(`/view/${req.params.blogId}`);
        } else {
            res.redirect(`/`);
        }
    });
});

module.exports = router;