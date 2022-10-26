import runQuery from "../DAL.mjs";
export const newCart = (user_id, cb) => {
    let date = new Date();
    return runQuery('INSERT INTO `carts`(`user_id`, `create_date`) VALUES (?,?)',[user_id, date],cb)
}
export const newItem = ({ product_id, amount, price, cart_id }, cb) => {
    return runQuery('INSERT INTO `cart_items`( `product_id`, `amount`, `price`, `cart_id`) VALUES (?,?,?,?)', [product_id, amount, price, cart_id],cb)
}
export const removeItem = (cartId,itemId, cb) => {
    return runQuery('DELETE FROM `cart_items` WHERE `cart_id`=? AND `item_id`=?', [cartId,itemId],cb)
}
export const deleteCart = (cartId,cb) => {
    return runQuery('DELETE FROM `cart_items`  WHERE `cart_id`=?', [cartId], (res) =>{
        if (res == null) {console.log(res); return cb('faild') } 
        else {
            runQuery('DELETE FROM `carts` WHERE `cart_id`= ?', [cartId], (result) => {
                (result == null ? cb(401) : cb(result));
            })
        }
    })
}
export const getExsistCart = (userId, cb) => {
    return runQuery('SELECT * FROM carts c WHERE user_id=? AND c.cart_id NOT IN (SELECT cart_id FROM orders);', [userId], (res) => {
        if (res.length == 0) return cb('no cart found')
        else return cb(res[0]);
    }) 
}
export const getCartItems=(cartId,cb)=>{
    return runQuery('SELECT * FROM products INNER JOIN cart_items on cart_items.product_id=products.product_id WHERE cart_items.cart_id=?', [cartId], (result) => {
        (result == null ? cb(401) : cb(result));
    })
}
