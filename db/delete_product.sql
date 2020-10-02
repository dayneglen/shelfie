DELETE FROM product
WHERE product_id = $1;

SELECT * FROM product
ORDER BY product_id ASC;