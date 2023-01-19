const express = require('express');
const app = express();
const _PORT = 3000;


var blogs = require('../../resources/data/blogs');

//  Register ejs and it's location for view files
app.set('view engine', 'ejs');
app.set('views', 'resources/views');
app.use(express.static('public')); //serve static files

app.get('/', (req, res)=>{
    res.render('blog/index', {title: 'Home', blogs});
});

app.get('/about', (req, res)=>{
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res)=>{
    res.render('blog/create', {title: 'Create'});
});

app.use((req, res)=>{
    res.status(404).render('404', {title: '404'});
})

app.listen(_PORT, ()=>{
    console.log(`Server started on port ${_PORT}`);
});