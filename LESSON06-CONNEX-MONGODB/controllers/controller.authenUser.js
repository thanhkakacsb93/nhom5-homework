import Usermodel from "../model/uses.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import filmModel from "../model/film.model.js";


const Sigup = async (req, res) => {
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
            await Usermodel.deleteOne({ username })
        }
    }
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
}


const confirmation = async (req, res) => {
    try {
        const accesstoken = req.headers["x-accesstoken-configmation"]
        const checktoken = jwt.verify(accesstoken, process.env.KEY_SIGUP)

        await Usermodel.updateOne({ username: checktoken.username }, { confirmation: true })

    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            res.status(400).json({
                message: "token is Expired"
            })
        }
        else {
            return res.status(400).json({
                message: "something went wrong"
            })
        }
    }
    res.json({
        message: "tài khoản đã được kích hoạt"
    })
}


const Login = async (req, res) => {
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
        return res.status(400).json({
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
}

const viewListfilm = async (req, res) => {
    try {
        const accesstoken = req.headers["x-access-token"]
        if (!accesstoken) {
            const filmFree = await filmModel.find({ isFree: false })
            return res.json({
                data: filmFree
            })
        }

        const checktoken = jwt.verify(accesstoken, process.env.KEY)
        const AllFilm = await filmModel.find({})
        res.json({
            data: AllFilm
        })

    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(400).json({
                message: "token is Expired"
            })
        }
        else {
            return res.status(400).json({
                message: "something went wrong"
            })
        }
    }
}

const PostFilm = async (req, res) => {
    const { name, isFree } = req.body
    if (!name || !isFree) {
        return res.status(400).json({
            message: "name or isFree wrong"
        })
    }
    const checkNameFilm = await filmModel.findOne({ name })
    if (checkNameFilm) {

        return res.status(400).json({
            message: `${name} already exits`
        })
    }

    const newFilm = new filmModel({
        name,
        isFree
    })
    await newFilm.save()

    return res.status(201).json({
        message: "thêm thành công"
    })

}

const UpdateFilm = async (req, res) => {
    const { namefilm } = req.params
    const { name, isFree } = req.body
    let Filmedit = await filmModel.findOne({ name: namefilm })
    if (!Filmedit) {
        return res.status(400).json({
            message: "Movie not found"
        })
    }

    const checkNameFilm = await filmModel.findOne({ name })
    if (checkNameFilm) {
        return res.status(400).json(
            {
                message: `name ${name} already exits`
            }
        )
    }

    const updateFilm = {
        ...(name && { name }),
        ...(isFree && { isFree })
    }

    await filmModel.updateOne({ name: namefilm }, updateFilm)
    return res.status(200).json({
        message: "update thành công"
    })
}

const DeleteFilm = async (req, res, next) => {
    const { namefilm } = req.params
    let Filmedit = await filmModel.findOne({ name: namefilm })
    if (!Filmedit) {
        return res.status(400).json({
            message: "Movie not found"
        })
    }
    await filmModel.deleteOne({ name: namefilm })
    return res.json({
        message: `${namefilm} hass been deleted`
    })
}
const controllerAuthentUser = { Sigup, confirmation, Login, viewListfilm, PostFilm, UpdateFilm, DeleteFilm }

export default controllerAuthentUser