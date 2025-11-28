--
-- Create a small database with two tables to play around 
--

DROP DATABASE library;
CREATE DATABASE library;
USE library;

show tables;

CREATE TABLE author (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    birth_year INT
);

CREATE TABLE book (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    publish_year INT,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES author(id)
);

INSERT INTO author (name, birth_year)
VALUES
    ('J. K. Rowling', 1965),
    ('J.R.R Tolkien', 1892)
;

INSERT INTO book (title, publish_year, author_id)
VALUES
    ('Harry Potter and the Philosophers stone', 1997, 1),
    ('Harry potter and the Chambers of Secrets', 1998, 1),
    ('The fellowship of the ring', 1954, 2)
;

select * from author;
select * from book;

SELECT 
    *
FROM book AS b
    JOIN author AS a
        ON b.author_id = a.id
;



