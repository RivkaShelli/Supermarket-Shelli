import runQuery from '../DAL.mjs';


export const allOrders = (cb) => {
    return runQuery('SELECT COUNT(*) AS NumberOfOrders FROM orders', [], cb);
}

export const newOrder = (user_id, { cart_id, total_price, city, street, shipping_date, order_date, digits },cb) => {
    return runQuery('INSERT INTO orders( `user_id`, `cart_id`, `total_price`, `city`, `street`,`shipping_date`, `order_date`, `4_digits`)VALUES(?,?,?,?,?,?,?,?)',
        [user_id, cart_id, total_price, city, street, shipping_date, order_date, digits], cb);
    
    
}