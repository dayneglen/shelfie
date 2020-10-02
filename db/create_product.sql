INSERT INTO product (
    name, 
    price, 
    img
    ) VALUES (
    ${name},
    ${price},
    ${img}
);

SELECT * FROM product
ORDER BY product_id ASC;