UPDATE product
SET name = ${name},
    price = ${price},
    img = ${img}
WHERE product_id = ${id};

