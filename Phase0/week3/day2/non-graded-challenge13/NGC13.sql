CREATE DATABASE bagDB;

use bagDB;

CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_address VARCHAR(255) NOT NULL,
);

CREATE TABLE IF NOT EXISTS roles (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    role_description VARCHAR(255) NOT NULL,
);

CREATE TABLE IF NOT EXISTS users_roles (
    user_role_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    roles_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (role_id) REFERENCES users(roles)
);

CREATE TABLE IF NOT EXISTS transactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    transaction_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users_roles(user_id)
);

CREATE TABLE IF NOT EXISTS tag_type (
    tag_type_id INT AUTO_INCREMENT PRIMARY KEY,
    tag_type_desc VARCHAR(255) NOT NULL,
);

CREATE TABLE IF NOT EXISTS tag_size (
    tag_size_id INT AUTO_INCREMENT PRIMARY KEY,
    tag_size_desc VARCHAR(255) NOT NULL,
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


-- link table :

-- https://docs.google.com/spreadsheets/d/1zoUZGMcOUyylVd36IS8uw07SIFIFXSdn4NsTNbDn91Q/edit?usp=sharing