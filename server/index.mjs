import express from "express";
import authRouter from './controllers/auth.ctrl.mjs'
import productRouter from './controllers/products.ctrl.mjs'
import cartRouter from "./controllers/cart.ctrl.mjs";
import orderRouter from "./controllers/order.mjs";
import jwt from 'jsonwebtoken';
const app = express();
process.env.jwtsecret = '6346ec06c8f0e89490e57cc406607fe0';
const PORT = 9999;
app.use(express.json());
app.use('/api/images', express.static('uploads'));
app.use('/api', authRouter);

app.use( function (req, res, next) {
    const token = req.headers.authorization;
    if (!token) return res.status(400).send('token is missing');
    const [tokenType, jwtToken] = token.split(' ');
    try {
        jwt.verify(jwtToken, process.env.jwtsecret);
    } catch (ex) {
        console.log(ex);
        return res.status(400).send();
    }
    const user = jwt.decode(jwtToken);
    req.body.user = user;
    next();
})
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/currentUser', function (req, res) {
    let user = req.body.user.data;
    res.send(user);
})
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`server is runing on port:${PORT}`))