import runQuery from '../DAL.mjs';


export const productsCount = (cb) => {
    return runQuery('SELECT COUNT(*) AS NumberOfProducts FROM products ', [], cb)
}
export const getCategories = (cb) => {
    return runQuery('SELECT * FROM  categories', [], cb);
}
export const getProducts = (cb) => {
    return runQuery('SELECT * FROM  products', [], cb);
}
export const getProductBySearch = (serchWord, cb) => {
    return runQuery('SELECT * FROM `products` WHERE `product_name`=?', [serchWord], (result) => {
        (result == null ? cb(401) : cb(result));
    })
}
export const addProduct = ({ product_name, product_category, price, image }, cb) => {
    return runQuery('INSERT INTO `products`( `product_name`, `category_id`, `price`, `image`) VALUES (?,?,?,?)'
        , [product_name, product_category, price, image], (result) => {
            (result == null ? cb(401) : cb(result));
        }
    )
}
export const updateProduct = (pId, { product_name, category_id, price, image }, cb) => {
    return runQuery(`UPDATE products SET product_name =?,category_id =?,price = ?,image =? WHERE product_id=?`, [product_name, category_id, price, image, pId], (result) => {
        (result == null ? cb(401) : cb(result));
    })
}
export const getProductByCategory = (category,cb) => {
    return runQuery('SELECT * FROM products WHERE category_id=?', [category], (result) => {
        (result == null ? cb(401) : cb(result));
    })
}


