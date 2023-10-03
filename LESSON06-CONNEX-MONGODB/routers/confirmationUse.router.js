import express from "express"
import controllerAuthentUser from "../controllers/controller.authenUser.js"

const router = express.Router()
router.put("/confirmationUser", controllerAuthentUser.confirmation)
export default router