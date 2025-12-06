-- create a small database --

DROP DATABASE library_db;
CREATE DATABASE library_db;
USE library_db; 

show tables;

create table author (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    birth_year INT
);

create table book (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    publish_year INT,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES author(id)
);

insert into author (name, birth_year)
values 
    ('J. K. Rowling', 1965),
    ('J.R.R Tolkien', 1892)
;

insert into book (title, publish_year, author_id)
values
    ('Harry Potter and the Goblet of Fire', 2001, 1),
    ('Harry Potter and the Order of Phoenix', 2003, 1),
    ('The Saga Trilogy', 1979, 2)
;

Select * from book;

SELECT 
    b.id AS book_id,
    b.title,
    b.publish_year,
    a.id,
    a.name,
    a.birth_year
FROM book b
    JOIN author a 
        ON b.author_id = a.id
;



