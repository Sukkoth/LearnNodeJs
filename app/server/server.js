const express = require('express');
const app = express();


//register ejs
app.set('view engine', 'ejs');
//set the folder for your views
app.set('views', 'resources/views');

const _PORT = 3000;

//  Homepage
app.get('/', (req, res)=>{
    const blogs = [
        {title: "The dark knight", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo obcaecati sunt, ad laboriosam aliquid molestiae alias asperiores adipisci libero accusamus dicta architecto, id quia ratione maxime provident, laborum iste. Quaerat reiciendis exercitationem omnis maiores repellat non maxime dolorum cupiditate,"},
        {title: "Up and Down in the sky", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo obcaecati sunt, ad laboriosam aliquid molestiae alias asperiores adipisci libero accusamus dicta architecto, id quia ratione maxime provident, laborum iste.Quaerat reiciendis exercitationem omnis maiores repellat non maxime dolorum cupiditate,"},
        {title: "The love and the poison", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo obcaecati sunt, ad laboriosam aliquid molestiae alias asperiores adipisci libero accusamus dicta architecto, id quia ratione maxime provident, laborum iste.Quaerat reiciendis exercitationem omnis maiores repellat non maxime dolorum cupiditate,"},
        {title: "Me, myself and mine", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo obcaecati sunt, ad laboriosam aliquid molestiae alias asperiores adipisci libero accusamus dicta architecto, id quia ratione maxime provident, laborum iste.Quaerat reiciendis exercitationem omnis maiores repellat non maxime dolorum cupiditate,"}
    ]
    res.render('index', {title: 'Home', blogs:blogs});
});

//  About page
app.get('/about', (req, res)=>{
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res)=>{
    res.render('create', {title: 'Create'});
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
    res.status(404).render('404', {title: '404'});
});

//  Starts the server on port @var _PORT
app.listen(_PORT, ()=>{
    console.log(`Server started on port ${_PORT}`);
});

