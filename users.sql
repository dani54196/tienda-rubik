CREATE TABLE IF NOT EXISTS users (
    user_id int NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    name VARCHAR(128) NOT NULL,
    email VARCHAR(128) NOT NULL UNIQUE,
    password VARCHAR(128) NOT NULL,
    role VARCHAR(32) NOT NULL,
    address VARCHAR(128) NOT NULL,
    phone VARCHAR(32) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME
) DEFAULT CHARSET UTF8;

INSERT INTO
    users
VALUES(
        1,
        'Jack',
        'Jack@mail.com',
        '123456',
        'admin',
        'Beijing 123',
        '12345678901',
        '2020-01-01 00:00:00',
        '2020-01-01 00:00:00'
    );

SELECT * FROM users;

DROP TABLE IF EXISTS users;