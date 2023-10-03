import express from "express"
import controllerAuthentUser from "../controllers/controller.authenUser.js"

const router = express.Router()

router.get("/view", controllerAuthentUser.viewListfilm)

export default router