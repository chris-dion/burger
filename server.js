var express = require("express");

var app = express();
var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/select", function(req, res){

	// Console log all the party_name's.
	orm.select("*", "burgers");

});


app.post("/insert", function(req,res){
	var new_burger = $('#new_burger');
	//inserting a burger into database
	orm.insert(new_burger);

});

app.put("/put", function(req,res){
	//update the burger from not eaten to eaten.
	orm.update();
});