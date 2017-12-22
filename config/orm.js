var connection = require("./connections.js");

var orm = {
  selectAll: function(table_name, cb) {
    var queryString = "SELECT * FROM "+ table_name+";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },

  insertOne: function(burger_name) {
    var queryString = "INSERT INTO burgers (burger_name, devoured, date) VALUES ("+burger_name+", false, NOW()); ";

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(burger_name) {
    var queryString = "UPDATE burgers SET burger_name = "+burger_name+", devoured = true, date = NOW() WHERE burger_name = "+burger_name+";";

    console.log(queryString);

    connection.query(queryString, function( err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;