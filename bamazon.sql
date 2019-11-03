DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  category VARCHAR(45) NOT NULL,
  starting_bid INT default 0,
  highest_bid INT default 0,
  PRIMARY KEY (id)
);
