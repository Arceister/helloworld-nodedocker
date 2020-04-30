const express = require('express');
const app = express();
const port = 69;

app.get('/', function(req, res){
    res.send("Docker Success");
});

app.listen(port, function(){
    console.log("Listen to", port);
});