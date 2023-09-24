import Usermodel from "../model/uses.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const middlewareAutLogin = async (req, res, next) => {
    const { username, passwould } = req.body
    if (!username || !passwould) {
        res.status(400).json({
            message: "Missing required keys",
        });
    }

    const checkUserLogin = await Usermodel.findOne({ username })
    if (!checkUserLogin) {
        res.status(400).json({
            message: "username  wrong"
        })
    }

    if (!checkUserLogin.confirmation) {
        res.status(400).json({
            message: "unconfirmed user"
        })
    }
    const checkpassword = await bcrypt.compare(passwould, checkUserLogin.passwould)
    if (!checkpassword) {
        res.status(400).json({
            message: "passwould wrong"
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

    res.status(201).json({
        message: "đăng nhập thành công",
        accesstoken: token
    })
    next()
}

export default middlewareAutLogin