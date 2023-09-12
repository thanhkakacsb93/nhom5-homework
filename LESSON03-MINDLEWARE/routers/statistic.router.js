import express from "express"
import arrcouter from '../utils/datacout.js'

const router = express.Router()

router.get("/statistic", (req, res) => {
    console.log("arrcouter hiển thị system", arrcouter)
    res.json({ data: arrcouter })
})

export default router