import express from "express"
import MovieStore from "../utils/mokedata.film.js"
import users from "../utils/mokedata.user.js"

const router = express.Router()

router.get("/view", (req, res, nex) => {
    res.json({
        data: MovieStore
    })
})

export default router