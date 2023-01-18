const { response } = require('express');
const express = require('express');
const app = express();
const _PORT = 3000;



//  Homepage
app.get('/', (req, res)=>{
    res.sendFile('/index.html',{root: '/home/sukkoth/Documents/Workspace/JavaScript/Basics/resources/views'});
})

//  About page
app.get('/about', (req, res)=>{
    res.sendFile('/about.html', {root: '/home/sukkoth/Documents/Workspace/JavaScript/Basics/resources/views'});
})

//login page

app.get('/login', (req, res)=>{
    res.sendFile('/login.html', {root:'/home/sukkoth/Documents/Workspace/JavaScript/Basics/resources/views'});
})

//login check credential (but does not work now)
app.post('/login', (req, res) => {
    console.log(req);
    res.redirect('/login');
});


//  incase user inputs unknown routes, 404 page is shown
app.use((req, res)=>{
    res.status(404).sendFile('/404.html', {root: '/home/sukkoth/Documents/Workspace/JavaScript/Basics/resources/views'});
})

//  Starts the server on port @var _PORT

app.listen(_PORT, ()=>{
    console.log(`Server started on port ${_PORT}`);
})