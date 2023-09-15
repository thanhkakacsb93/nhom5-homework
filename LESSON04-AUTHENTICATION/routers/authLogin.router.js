import express from "express"
import users from "../utils/mokedata.user.js";
import jwt from "jsonwebtoken"

const router = express.Router()

router.post("/authLogin", (req, res) => {
    const { username, passwould } = req.body
    if (!username || !passwould) {
        res.status(400).json({
            message: "Missing required keys",
        });
    }
    const checkUserLogin = users.find((item) => item.username === username && item.passwould === passwould)

    if (!checkUserLogin) {
        res.status(400).json({
            message: "username or passwould wrong"
        })
    }
    //phat hanh ve 
    const payload = {
        username: checkUserLogin.username,
        passwould: checkUserLogin.passwould,
        role: checkUserLogin.role
    }
    const KEY = process.env.KEY
    const token = jwt.sign(payload, KEY, {
        expiresIn: process.env.TIME_KEY
    })

    res.json({
        message: "thanhkaka",
        accesstoken: token
    })

})

export default router