DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Charmin Toilet Paper", "Household Goods", 15, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Brawny Paper Towels", "Household Goods", 12, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Modern Household Planter", "Home Decor", 24, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pack of 4 Succulents", "Lawn & Garden", 22, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gray Sheet Set", "Household Goods", 40, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Geometric Throw Pillows", "Household Goods", 18, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Power of Habit", "Books", 16, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lavender Room Spray", "Cleaning Supplies", 9, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fine Tip Sharpies", "Office Supplies", 5, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Method Soap", "Cleaning Supplies", 4, 14);
