import express from "express"
import controllerAuthentUser from "../controllers/controller.authenUser.js"


const router = express.Router()
router.post("/sigup", controllerAuthentUser.Sigup)

export default router