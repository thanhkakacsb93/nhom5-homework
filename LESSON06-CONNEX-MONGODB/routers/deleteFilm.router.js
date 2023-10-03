import express from "express"
import controllerAuthentUser from "../controllers/controller.authenUser.js"
import middlewareAuthAdm from "../middleware/middleware.autAdm.js"
const router = express.Router()

router.delete("/:namefilm", middlewareAuthAdm, controllerAuthentUser.DeleteFilm)

export default router
