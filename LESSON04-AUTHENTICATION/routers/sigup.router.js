import express from "express"
import middlewareSigup from "../middleware/middleware.sigup.js"
import users from "../utils/mokedata.user.js"

const router = express.Router()

router.post("/sigup", middlewareSigup, (req, res) => {
    res.json({
        data: users
    })
})

export default router