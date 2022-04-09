const express = require('express');

const app = express();

app.get("/", function(req, res){
    res.send("Welcom to your First APP")
})



app.listen(process.env.PORT || 3000)