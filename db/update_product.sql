UPDATE product
SET name = ${name},
    price = ${price},
    img = ${img}
WHERE product_id = ${id};

SELECT * FROM product
ORDER BY product_id ASC;