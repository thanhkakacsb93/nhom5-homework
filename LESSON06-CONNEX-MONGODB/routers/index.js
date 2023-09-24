import express from "express"
import viewRouter from "./viewFilm.router.js"
import sigupRouter from "./sigup.router.js"
import authLoginRouter from "./authLogin.router.js"
import postfilmRouter from "./postFilm.router.js"
import editFilmRouter from "./editFilm.router.js"
import deleteFilmRouter from "./deleteFilm.router.js"
import confirmationUseRouter from "./confirmationUse.router.js"
import middlewareAuthAdm from "../middleware/middleware.autAdm.js"


const router = express.Router()

router.use("/film4", sigupRouter)
router.use("/film4", confirmationUseRouter)
router.use("/film4", authLoginRouter)
router.use("/film4", viewRouter)

router.use(middlewareAuthAdm)
router.use("/film4/post", postfilmRouter)
router.use("/film4/edit", editFilmRouter)
router.use("/film4/delete", deleteFilmRouter)

export default router

