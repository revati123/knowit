

// Server Side Javascript File

var express =require('express');
var path=require('path');

var app=express();

app.use(express.static(path.join(__dirname, 'public')));

var onHello=function(req, res){
    var product={
        id:34,
        title:'gerbera',
        description:'festival flower',
        unitprice:5,
        quantity:10000
    }

    res.send(product);

}
app.get('/hello', onHello);

var onDefault=function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
}
app.get('/', onDefault);
var onListen=function(){
    console.log( "Server is listening on port 9999...");

}
app.listen(9999,onListen);
