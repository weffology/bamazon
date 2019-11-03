// add dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");

// create connection info for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon_DB"
});

// connect to mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  start();
});

// create function that displays all items for sale
function start() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log("-----------------------------------");
    console.log("Welcome to Bamazon! Here is a list of our current products:");
    console.log("-----------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + "$" + res[i].price + " | " + "Qty. " + res[i].stock_quantity);
    };
    console.log("-----------------------------------");
  });
}