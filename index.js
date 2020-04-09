var express=require("express");
var app=express();
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
app.use(express.static(__dirname+'/public'));
app.get("/",function(req,res) {
	res.sendFile(__dirname+"/views/map.html");
});
app.listen("3000","127.0.0.1",function() {
	console.log("Server is listening!!")
})