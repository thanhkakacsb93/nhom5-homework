import express from "express"
import users from "../utils/mokedata.user.js"

const router = express.Router()

router.post("/sigup", (req, res) => {
    const { username, passwoud } = req.body;
    if (!username || !passwoud) {
        res.status(400).json({
            message: "Missing required keys",
        });
    }
    res.json({
        message: "da them"
    })
})

export default router