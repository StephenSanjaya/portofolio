-- QUERY 1
SELECT first_name, last_name
FROM actor
ORDER BY first_name DESC;

-- QUERY 2
SELECT *
FROM actor
WHERE first_name LIKE "c%"
LIMIT 10;

-- QUERY 3
SELECT title, rental_rate, rating
FROM film
WHERE rating in ('G','R') AND rental_rate BETWEEN 2 AND 5;

-- QUERY 4
SELECT rating, AVG(rental_duration)
FROM film
GROUP BY rating;

-- QUERY 5
SELECT f.title, fa.actor_id, f.film_id
FROM film f
INNER JOIN film_actor fa on f.film_id = fa.film_id
WHERE fa.actor_id = 15;