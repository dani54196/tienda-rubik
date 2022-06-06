CREATE TABLE IF NOT EXISTS cart_items(
    cart_item_id int NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    cart_id int,
    item_id int,
    quantity int NOT NULL,
    subtotal DECIMAL NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME
) DEFAULT CHARSET UTF8;
