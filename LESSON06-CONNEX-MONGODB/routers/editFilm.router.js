import express from "express"
import controllerAuthentUser from "../controllers/controller.authenUser.js"
import middlewareAuthAdm from "../middleware/middleware.autAdm.js"
const router = express.Router()

router.patch("/:namefilm", middlewareAuthAdm, controllerAuthentUser.UpdateFilm)

export default router
