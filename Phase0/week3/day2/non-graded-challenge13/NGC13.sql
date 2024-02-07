-- Database Design and Creation:

CREATE DATABASE bagDB;
use bagDB;

CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_address VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS roles (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    role_description VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS users_roles (
    user_role_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

CREATE TABLE IF NOT EXISTS transactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    transaction_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users_roles(user_id)
);

CREATE TABLE IF NOT EXISTS tag_type (
    tag_type_id INT AUTO_INCREMENT PRIMARY KEY,
    tag_type_desc VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS tag_size (
    tag_size_id INT AUTO_INCREMENT PRIMARY KEY,
    tag_size_desc VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS tags_transaction (
    tags_trans_id INT AUTO_INCREMENT PRIMARY KEY,
    transaction_id INT NOT NULL,
    tag_type_id	INT NOT NULL,
    tag_size_id INT NOT NULL,
    FOREIGN KEY (transaction_id) REFERENCES transactions(transaction_id),
    FOREIGN KEY (tag_type_id) REFERENCES tag_type(tag_type_id),
    FOREIGN KEY (tag_size_id) REFERENCES tag_size(tag_size_id)
);


-- Data Population:

INSERT INTO users (user_name, user_address) 
VALUES  ("budi", "jl. street1"),
        ("siti", "jl. street2"),
        ("ferdi", "jl. street3");

INSERT INTO roles (role_description) 
VALUES  ("Customer"),
        ("Admin");

INSERT INTO users_roles (user_id, role_id)
VALUES  (1, 1),
        (2, 1),
        (3, 2);

INSERT INTO transactions (user_id, transaction_date)
VALUES  (1, "2020-02-25"),
        (1, "2020-02-27"),
        (2, "2020-02-27"),
        (1, "2020-02-30");

INSERT INTO tag_type (tag_type_desc)
VALUES  ("kulit"),
        ("suede"),
        ("satin"),
        ("cotton");

INSERT INTO tag_size (tag_size_desc)
VALUES  ("small"),
        ("medium"),
        ("large");

INSERT INTO tags_transaction (transaction_id, tag_type_id, tag_size_id)
VALUES  (1, 2, 3),
        (1, 1, 1),
        (2, 3, 1),
        (3, 4, 2),
        (4, 1, 2);

-- link table :

-- https://docs.google.com/spreadsheets/d/1zoUZGMcOUyylVd36IS8uw07SIFIFXSdn4NsTNbDn91Q/edit?usp=sharing