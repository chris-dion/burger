var orm = require("../config/orm.js");

var orm = {
	app.get("api/select", function(req, res){

		// Console log all the party_name's.
		orm.selectAll("burgers");

	});


	app.post("api/insert", function(req,res){
		//inserting a burger into database
		orm.insert(new_burger);

	});

	app.put("api/put", function(req,res){
		//update the burger from not eaten to eaten
		orm.update(new_burger);
	});
};


module.exports = orm;