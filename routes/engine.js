var express = require('express');
var router = express.Router();
var http = require('http');
var io = require("socket.io")(http);
var path = require("path");

io.on("connection", function(socket){
    console.log("A user connected");
    
    socket.on('addQuee', function(msg){
        io.emit("addQuee", "Hello world")
    });

    socket.on('update', function(msg){
        addGalery("01");
        
    });
    
})

function addGalery(filename){
    var data = ""
    var addlayout ='<div class="capitaAdd" click="this.remove();" style="position:fixed; bottom:2px; left:30%; width:600px; height:70px; background-color:red">';
     addlayout+='<img src="http://localhost:4200/gallery/'+filename+'.jpg"/>';
    addlayout+='<span style="position:absolute; top:3px; right:10px >csdcascdscasdX </span></div>';
    io.emit("update", addlayout);
}

router.get('/', function(req, res, next) {
    addGalery(req.query.name);
    res.send(req.query.name);
});

module.exports = router;
