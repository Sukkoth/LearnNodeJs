const http = require('http');
const fs = require('fs');
const PORT = 8080;

http.createServer((req, res) => {
    let view = "././resources/views/";

    switch (req.url) {
        case "/":
            view+="index.html";
            break;
        case "/about":
            view+="about.html";
            break;
        default:
            view+="404.html";
            break;
    }

    res.setHeader('Content-type', 'text/html');
    fs.readFile(view, (error, pageView)=>{
        if(error){
            fs.readFile("././resources/views/500.html", (error, serverErrorPage)=>{
                res.statusCode = 500;
                if(error){
                    console.log("Error reading 500.html file");
                    res.end("Server Error");
                }
                else res.end(serverErrorPage);
            });
        }
        else{
            res.statusCode = 200;
            res.end(pageView);
        }
    })

}).listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}.`);
});