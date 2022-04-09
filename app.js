const express = require('express');

const app = express();

app.get("/", function(req, res){
    res.send("Congratulations! Welcome to your First APP")
})

app.get("/new", function(req, res){
    res.send("Welcome to your First APP")
})






app.listen(process.env.PORT || 3000)