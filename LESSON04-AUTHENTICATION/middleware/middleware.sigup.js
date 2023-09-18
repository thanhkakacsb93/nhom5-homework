// import users from "../utils/mokedata.user.js"
// const middlewareSigup = (req, res, next) => {
//     const { username, passwould } = req.body;
//     if (!username || !passwould) {
//         res.status(400).json({
//             message: "Missing required keys",
//         });
//     }
//     const checkUserSigup = users.find((item) => item.username === username)
//     if (checkUserSigup) {
//         res.json({
//             message: "username already exists"
//         })
//     }
//     users.push({
//         username,
//         passwould,
//         role: "member",
//         confirmation: false
//     })
//     next()
// }

// export default middlewareSigup

import users from "../utils/mokedata.user.js"
import jwt from "jsonwebtoken"
const middlewareSigup = (req, res, next) => {
    const { username, passwould } = req.body;
    if (!username || !passwould) {
        res.status(400).json({
            message: "Missing required keys",
        });
    }
    const checkUserSigup = users.find((item) => item.username === username)
    if (checkUserSigup) {
        res.json({
            message: "username already exists"
        })
    }

    const payload = {
        username,
        passwould,
        role: "member",
        confirmation: false
    }
    const KEY = process.env.KEY_SIGUP
    const token = jwt.sign(payload, KEY, {
        expiresIn: process.env.TIME_KEY_SIGUP
    })
    // users.push({
    //     username,
    //     passwould,
    //     role: "member",
    //     confirmation: false
    // })
    next()
}

export default middlewareSigup