import express from "express";
import { addProduct, productsCount, getCategories, getProductByCategory, getProductBySearch, getProducts, updateProduct } from '../BL/products.bl.mjs';
const productRouter = express.Router();

productRouter.get('/categories', function (req, res) {
    getCategories((result) => {
        if (!result)
            return res.send('error')
        return res.send(result);
    })
})
productRouter.get('/', function (req, res) {
    getProducts((result) => {
        if (!result)
            return res.send('error')
        return res.send(result);
    })
})
productRouter.post('/', function (req, res) {
    let role = req.body.user.data.role
    if (role == 1) {
        addProduct(req.body, (result) => {
            if (result == 401) {
                return res.send(401)
            } return res.send(result)
        })
    } else return res.status(401).send('only admin can add new product');
})
productRouter.put('/:pid', function (req, res) {
    updateProduct(req.params.pid, req.body, (result) => {
        if (result == 401) {
            return res.send(401)
        }
        return res.send(result)
    })
})
productRouter.get('/:category', function (req, res) {
    getProductByCategory(req.params.category, (result) => {
        if (result == 401) {
            return res.send(401)
        }
        return res.send(result)
    })
})
productRouter.get('/search/:serchWord', function (req, res) {
    getProductBySearch(req.params.serchWord, (result) => {
        if (result == 401) {
            return res.send(401)
        }
        return res.send(result)
    })
})
productRouter.get('/all/count', function (req, res) {
    productsCount((result) => {
        if (!result)
            return res.send('error')
        return res.send(result[0]);
    })
    
})


export default productRouter;