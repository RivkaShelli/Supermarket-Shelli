import express from "express";
import jwt from 'jsonwebtoken';
import { IsUser, newUser } from '../BL/auth.bl.mjs'
const authRouter = express.Router();
const getNewToken = (data) => {
    let token = jwt.sign({ data }, process.env.jwtsecret);
    return token;
}

authRouter.post('/login', async function (req, res) {
    IsUser(req.body, (result) => {
        if (result.length !== 0) {
            let u = result[0];
            let obj = {
                token: getNewToken(u),
                user_id: u.user_id,
                role: u.role

            };
            return res.send(obj);
        } else
            return res.status(401).send("invalid username or password");
    })
})
authRouter.post('/register', async function (req, res) {
    debugger;
    newUser(req.body, (result) => {
        if (!result) {
            return res.status(400).send("username already exists");
        } else
            res.send(result);
    })
})
export default authRouter;