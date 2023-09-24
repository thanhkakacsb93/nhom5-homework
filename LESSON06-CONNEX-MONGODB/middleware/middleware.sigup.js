import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Usermodel from "../model/uses.model.js";

const middlewareSigup = async (req, res, next) => {

    const { username, passwould } = req.body;
    if (!username || !passwould) {
        res.status(400).json({
            message: "Missing required keys",
        });
    }
    const checkUserSigup = await Usermodel.findOne({ username })
    if (checkUserSigup) {
        if (checkUserSigup.confirmation) {
            return res.json({
                message: "username already exists"
            })
        }
        else {
            // console.log("đang xoá")
            await Usermodel.deleteOne({ username })
        }
    }
    // console.log("đang tạo tài khoản mới")
    const difficult = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(passwould, difficult)
    const newUser = new Usermodel(
        {
            username,
            passwould: hashPassword
        })

    await newUser.save()

    const payload = {
        username,
        role: "member",
        confirmation: false,
    }
    const KEY = process.env.KEY_SIGUP
    const token = jwt.sign(payload, KEY, {
        expiresIn: process.env.TIME_KEY_SIGUP
    })

    res.json({
        accesstoken: token
    })
    next()
}

export default middlewareSigup