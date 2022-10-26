import express from "express";
import { deleteCart, getCartItems, getExsistCart, newCart, newItem, removeItem } from "../BL/cart.bl.mjs";
const cartRouter = express.Router();

cartRouter.post('/', function (req, res) {
    let uId = req.body.user.data.user_id;
    newCart(uId, (result) => {
        if (!result)
            return res.send('error')
        return res.send(result);
    })
})
cartRouter.post('/addItem', function (req, res) {
    console.log(req.body);
    newItem(req.body, (result) => {
        if (!result)
            return res.send('error');
        return res.send(result);
    })
})
cartRouter.get('/', function (req, res) {
    let cartDetail;
    let uId = req.body.user.data.user_id;
    getExsistCart(uId, (result) => {
        if (result === 'no cart found')
            return res.status(401).send('no cart found')
        else {
            cartDetail = result;
            getCartItems(cartDetail.cart_id, (result2) => {
                if (!result2)
                    return res.send(cartDetail);
                let x = {
                    "cartId": cartDetail.cart_id,
                    "create_date": cartDetail.create_date,
                    "cartItems": result2
                }
                return res.send(x);
            })
        }
        
    })
})
cartRouter.delete('/:cartId', function (req, res) {
    deleteCart(req.params.cartId, (result) => {
        if(!result)
            return res.send('error')
        return res.send(result);
    })
})
cartRouter.delete('/:cartId/:itemId', function (req, res) {
    let cartId = req.params.cartId;
    let itemId = req.params.itemId;
    removeItem(cartId, itemId, (result) => {
        if (!result)
            return res.send('error')
        return res.send(result);
    })
})





export default cartRouter;