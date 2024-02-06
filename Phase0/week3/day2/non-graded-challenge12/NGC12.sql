-- Database Design and Creation:

CREATE DATABASE tourism;
USE tourism;

CREATE TABLE IF NOT EXISTS destinations (
    id_destination INT AUTO_INCREMENT PRIMARY KEY,
    destination_name VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    destination_rating INT NOT NULL
);

CREATE TABLE IF NOT EXISTS hotels (
    id_hotel INT AUTO_INCREMENT PRIMARY KEY,
    hotel_name VARCHAR(255) NOT NULL,
    id_destination INT NOT NULL,
    hotel_rating INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_destination) REFERENCES destinations(id_destination)
);

CREATE TABLE IF NOT EXISTS bookings (
    id_booking INT AUTO_INCREMENT PRIMARY KEY,
    guest_details VARCHAR(255) NOT NULL,
    id_hotel INT NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    FOREIGN KEY (id_hotel) REFERENCES hotels(id_hotel)
);


-- Data Population:

INSERT INTO destinations (destination_name, country, description, destination_rating) 
VALUES  ("Paris", "Prancis", "Description destinasi kota Paris", 4),
        ("Jakarta", "Indonesia", "Description destinasi kota Paris", 3),
        ("Bandung", "Indonesia", "Description destinasi kota Bandung", 5);

INSERT INTO hotels (hotel_name, id_destination, hotel_rating, address) 
VALUES  ("HotelDiParis", 1, 5, "Jln. paris123"),
        ("HotelDiJakarta", 2, 3, "Jln. jakarta123"),
        ("HotelDiBandung", 3, 2, "Jln. bandung123"),
        ("HotelDiBandung2", 3, 3, "Jln. bandung555");

INSERT INTO bookings (guest_details, id_hotel, check_in, check_out) 
VALUES  ("Keluarga Budi", 1, "2020-02-22", "2020-02-24"),
        ("Keluarga Siti", 1, "2020-04-22", "2020-05-01"),
        ("Keluarga Rudi", 3, "2020-02-10", "2020-02-17"),
        ("Keluarga Rini", 4, "2019-12-22", "2019-12-27"),
        ("Keluarga Joni", 2, "2019-12-31", "2020-01-03");


-- Data Retrieval:

-- soal A
SELECT * FROM destinations;

-- soal B
SELECT * FROM hotels;

-- soal C
SELECT * FROM bookings;

-- soal D
SELECT *
FROM hotels h
JOIN destinations d on h.id_destination = d.id_destination
WHERE destination_name = "Bandung";

-- soal E
SELECT AVG(hotel_rating) AS "Average Hotel Rating", h.id_destination, d.destination_name
FROM hotels h
JOIN destinations d on h.id_destination = d.id_destination
WHERE destination_name = "Bandung"
GROUP BY h.id_destination, d.destination_name;


-- Data Modification:

UPDATE hotels 
SET hotel_rating = 5 
WHERE id_hotel = 2;

UPDATE hotels 
SET address = "Jln. bukanparis123" 
WHERE id_hotel = 1;

DELETE FROM bookings
WHERE id_booking = 2;

