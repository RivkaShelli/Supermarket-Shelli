import express from "express";
import {allOrders, newOrder} from '../BL/order.bl.mjs'
const orderRouter = express.Router();


orderRouter.get('/count', function (req, res) {
    allOrders((result) => {
        if (!result)
            return res.send('error')
        return res.send(result[0]);
    })
})
orderRouter.post('/', function (req, res) {
    let uid = req.body.user.data.user_id;
    newOrder(uid, req.body, (result) => {
        if (!result)
            return res.send('faild to add new order')
        return res.send(result);
    })
})

export default orderRouter;




