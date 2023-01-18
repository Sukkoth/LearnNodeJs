const express = require('express');
const ejs = require('ejs');
const app = express();

const _PORT = 3000;

//  Register ejs and it's location for view files
app.set('view engine', 'ejs');
app.set('views', 'resources/views');

app.get('/', (req, res)=>{
    res.render('index', {title: 'Home'});
});

app.get('/about', (req, res)=>{
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res)=>{
    res.render('create', {title: 'Create'});
});

app.use((req, res)=>{
    res.status(404).render('404', {title: '404'});
})

app.listen(_PORT, ()=>{
    console.log(`Server started on port ${_PORT}`);
});