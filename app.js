var bodyParser = require('body-parser');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require("socket.io")(http);
var path = require("path");
var PORT = 4300;
app.use('/gallery',express.static(path.join(__dirname, '/gallery')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

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
    var addlayout ='<div class="capitaAdd" click="this.remove();" style="position:fixed; bottom:10px; left:20%; width:600px; height:70px; background-color:red">';
     addlayout+='<img src="http://localhost:'+PORT+'/gallery/'+filename+'.jpg"/>';
    addlayout+='<span style="position:absolute; top:3px; right:10px >csdcascdscasdX </span></div>';
    io.emit("update", addlayout);
}

app.get('/rest', function(req, res){
  var data = req.query;
  console.log(data);
  io.emit("addQuee", data)
  res.send("<h1>Hello World</h1>")
})



app.get('/update', function(req, res){
  if(req.query.name!=""){
    addGalery(req.query.name);
  } else {
    io.emit("update", "");
  }
  res.send(req.query.name);
})

app.post('/addapp',function(req,res){
  console.log(req.body)

  var storage = multer.diskStorage({
    destination: tmpUploadsPath
});
var upload = multer({
    storage: storage
}).any();

upload(req, res, function(err) {
    if (err) {
        console.log(err);
        return res.end('Error');
    } else {
        console.log(req.body);
        req.files.forEach(function(item) {
            console.log(item);
        });
        res.end('File uploaded');
    }
});
})

http.listen(PORT, function(){
  console.log("Sever started : http://localhost:"+PORT)
})