CREATE TABLE categories (
    id serial primary key,
    catName VARCHAR(100) UNIQUE not null
);

INSERT INTO categories (catName) values 
('dasturlash'),
('dizayin'),
('marketing');

CREATE TABLE sub_catigories(
    id serial primary key,
    sabName VARCHAR(100) not null,
    catId int REFERENCES categories(id)
);

INSERT INTO sub_catigories (sabName, catId) values ('python', 1);


CREATE TABLE users (
    id serial primary key,
    username VARCHAR(50) not null,
    login VARCHAR(120) UNIQUE not null,
    password VARCHAR(100) not null
);

INSERT INTO users (username, login, password) VALUES ('Vali', 'vali@gmail.com', 'vali789');


CREATE TABLE videos (
    id serial primary key,
    title VARCHAR(256) not null,
    userId int REFERENCES users(id),
    catId int REFERENCES categories(id),
    subId int REFERENCES sub_catigories(id),
    add_date date default current_timestamp
);

INSERT INTO videos (title, userId, catId, subId) VALUES ('java', 2, 1, 2);

CREATE TABLE comments (
    id serial primary key,
    userId int REFERENCES users(id),
    videoId int REFERENCES videos(id),
    comment VARCHAR(256) not null
);

INSERT INTO comments (userId, videoId, comment) VALUES (3, 1, 'nma bu');

CREATE DATABASE exam_8;

DROP DATABASE exam_8;
DROP TABLE users cascade;


-- UPDATE videos SET title = 'node' WHERE id = 2;
-- DELETE FROM videos WHERE  id = 2;