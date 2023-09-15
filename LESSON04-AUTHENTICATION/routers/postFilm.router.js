import express from "express"
import MovieStore from "../utils/mokedata.film.js"
import jwt from "jsonwebtoken"
import { v4 as uuidv4 } from "uuid"
import middlewareAuthAdm from "../middleware/middleware.autAdm.js"
const router = express.Router()

router.post("/post", middlewareAuthAdm, (req, res) => {
    const { name, isFree } = req.body
    MovieStore.push({
        id: uuidv4(),
        name,
        isFree
    })

    res.json({
        data: MovieStore
    })
})
export default router
