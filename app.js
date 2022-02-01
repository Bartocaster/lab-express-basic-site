const express = require("express");
const app = express();

app.use(express.static('public'));

app.get('/', function(request, response, next){
   
    response.sendFile(__dirname + '/views/home.html')
});

app.listen(3000)