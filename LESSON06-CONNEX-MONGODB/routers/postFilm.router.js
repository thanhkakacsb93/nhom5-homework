import express from "express"
import middlewareAuthAdm from "../middleware/middleware.autAdm.js"
import middlewarePostFilm from "../middleware/middleware.postFilm.js"
const router = express.Router()

router.post("/", middlewarePostFilm, (req, res) => {
    console.log("first")
})
export default router
