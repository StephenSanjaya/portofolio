CREATE DATABASE test3;

DROP DATABASE test2;

CREATE TABLE IF NOT EXISTS customer(
	id_customer INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    alamat VARCHAR(255) NOT NULL,
    no_telp INT NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE
)

CREATE TABLE IF NOT EXISTS customers(
	id_customer INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    alamat VARCHAR(255) NOT NULL,
    no_telp INT NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE
)

CREATE TABLE IF NOT EXISTS profiles (
    id_profile INT AUTO_INCREMENT PRIMARY KEY,
    id_customer INT UNIQUE NOT NULL,
    favorite_color VARCHAR(50),
    FOREIGN KEY (id_customer) REFERENCES customers(id_customer)
);

CREATE TABLE IF NOT EXISTS orders (
    id_order INT AUTO_INCREMENT PRIMARY KEY,
    id_customer INT NOT NULL,
    order_date DATE NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_customer) REFERENCES customers (id_customer)
);

ALTER TABLE customers ADD COLUMN birth_date DATE NOT NULL;

DROP TABLE customer;

INSERT INTO customers (nama, alamat, no_telp, email, birth_date) 
VALUES 
	('budi', 'jl. abc', 082323232, 'asd@email.com', '2013-02-20'),
    ('andi', 'jl. abcd', 082551561, 'asda@email.com', '2014-05-10'),
    ('rudi', 'jl. abce', 082776845, 'asdb@email.com', '2015-02-22'),
    ('rusdi', 'jl. abcf', 085553326, 'asdc@email.com', '2016-02-14'),
    ('mardi', 'jl. abch', 0822241536, 'asdd@email.com', '2017-02-20');
    
SELECT * FROM `customers`;

UPDATE customers SET email = 'budi@email.com' WHERE 'ani';

DELETE FROM customers WHERE email = 'budi@email.com';