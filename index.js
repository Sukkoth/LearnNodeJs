const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

//mongoose configuration
mongoose.set({'strictQuery': false});
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
mongoose.connection.on("open", ()=>console.log('connected to database'));

//set view engine to ejs
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); //encode url

app.get('/', (req, res)=>{
    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    res.render('about', { title: "About" });
});

app.use('/blogs', require('./routes/blog/blogRoutes'));

app.use((req, res) => {
    res.render('404', { title: "404" });
})

app.listen(process.env.APP_PORT, () => {
    console.log(`Server started on port ${process.env.APP_PORT}`);
});
