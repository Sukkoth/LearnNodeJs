const express = require('express');
const app = express();


//register ejs
app.set('view engine', 'ejs');
//set the folder for your views
app.set('views', 'resources/views');

const _PORT = 3000;

//  Homepage
app.get('/', (req, res)=>{
    res.render('index');
});

//  About page
app.get('/about', (req, res)=>{
    res.render('about');
});

app.get('/blogs/create', (req, res)=>{
    res.render('create');
})

//  login page
app.get('/login', (req, res)=>{
    res.render('login');
});

//  login check credential (but does not work now)
app.post('/login', (req, res) => {
    console.log(req);
    res.redirect('/login');
});

//  Incase user inputs unknown routes, 404 page is shown
app.use((req, res)=>{
    res.status(404).render('404');
});

//  Starts the server on port @var _PORT
app.listen(_PORT, ()=>{
    console.log(`Server started on port ${_PORT}`);
});

