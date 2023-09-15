import express from "express"
import MovieStore from "../utils/mokedata.film.js"
import middlewareAuthLogin from "../middleware/middleware.authLogin.js"

const router = express.Router()

router.get("/view", middlewareAuthLogin, (req, res) => {
    res.json({
        data: MovieStore
    })
})

export default router