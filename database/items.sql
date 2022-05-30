CREATE TABLE IF NOT EXISTS items (
    item_id int NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    name VARCHAR(128) NOT NULL,
    description VARCHAR(128),
    image_url VARCHAR(128) NOT NULL,
    quantity int NOT NULL,
    price int NOT NULL,
    magnet BOOLEAN,
    size VARCHAR(32),
    category VARCHAR(128)
) DEFAULT CHARSET UTF8;

INSERT INTO
    items
VALUES(
        1,
        '3x3x3 qiyi',
        'clasic 3x3x3 cube',
        'https://blog.kubekings.com/wp-content/uploads/2017/10/3X3.png',
        '5',
        '123',
        1,
        '5cm',
        '3x3x3'
    ),(
        2,
        '4x4x4 qiyi',
        '4x4x4 cube',
        'https://blog.kubekings.com/wp-content/uploads/2017/10/4X4.png',
        '15',
        '500',
        0,
        '7cm',
        '4x4x4'
    );

SELECT * FROM items;

DROP TABLE IF EXISTS items;