import express from "express"
import middlewareAuthLogin from "../middleware/middleware.authlogin.js"

const router = express.Router()

router.post("/authLogin", middlewareAuthLogin, (req, res) => { })

export default router