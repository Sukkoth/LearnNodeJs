const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;


app.get('/', (req, res)=>{
    fs.readFile('././resources/views/index.html', (error, returnView)=>{
        if(error){
            res.end("Server Error");
        }
        else{
            res.end(returnView);
        }
    })
})

app.get('/about', (req, res)=>{
    fs.readFile('././resources/views/about.html', (error, returnView)=>{
        if(error){
            res.end("Server Error");
        }
        else{
            res.end(returnView);
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})