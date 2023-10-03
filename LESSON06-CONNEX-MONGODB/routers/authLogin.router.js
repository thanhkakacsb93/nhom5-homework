import express from "express"
import controllerAuthentUser from "../controllers/controller.authenUser.js"

const router = express.Router()

// router.post("/authLogin", middlewareAuthLogin, (req, res) => { })

router.post("/authLogin", controllerAuthentUser.Login)
export default router