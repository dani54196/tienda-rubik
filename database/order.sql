CREATE TABLE IF NOT EXISTS orders (
    order_id int NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    item_id int,
    FOREIGN KEY (item_id) REFERENCES items(item_id),
    quantity int NOT NULL,
    subtotal DECIMAL NOT NULL,
    finished BOOLEAN,
    payment_method VARCHAR(128),
    payment_status VARCHAR(128),
    createdAt DATETIME,
    updatedAt DATETIME
) DEFAULT CHARSET UTF8;

drop Table orders;

