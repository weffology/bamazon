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
  chooseItem();
});

// create function that displays all items for sale
function start() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("-----------------------------------");
    console.log("Welcome to Bamazon! Here is a list of our current products:");
    console.log("-----------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + "$" + res[i].price + " | " + "Qty. " + res[i].stock_quantity);
    };
    console.log("-----------------------------------");
  });
};

// The app should then prompt users with two messages: 1) The first should ask them the ID of the product they would like to buy. 2) The second message should ask how many units of the product they would like to buy.
function chooseItem() {
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    inquirer.prompt([
        //first question here
        {
          name: "itemID",
          type: "rawlist",
          choices: function () {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].id);
            }
            return choiceArray;
          },
          message: "What is the ID for the item you'd like to purchase?"
        },
        // second question here
        {
          name: "itemQuantity",
          type: "input",
          message: "How many would you like?"
        }
      ])
      .then(function (answer) {
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].id === answer.itemID) {
            chosenItem = results[i];
          }
        }
        //determine if the store has enough of the product to meet customer's request
        if (chosenItem.stock_quantity >= parseInt(answer.itemQuantity)) {  
          var newAmount = parseInt(chosenItem.stock_quantity) - parseInt(answer.itemQuantity);
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              { stock_quantity: newAmount },
              { id: chosenItem.id }
            ],
            function (error) {
              if (error) throw err;
              console.log("Purchased: " + chosenItem.product_name);
              console.log("Qty: " + answer.itemQuantity);
              var itemCost = parseInt(answer.itemQuantity) * chosenItem.price;
              console.log("Total cost: $" + itemCost);
              console.log("Thank you for your purchase!");
            }
          );
        } else {
          console.log("Sorry, we're currently sold out.");
          start();
        }
      })
  })
};