import express from "express"
import viewRouter from "./viewFilm.router.js"
import sigupRouter from "./sigup.router.js"
import authRouter from "./authLogin.router.js"
import postfilmRouter from "./postFilm.router.js"
import editFilmRouter from "./editFilm.router.js"
import deleteFilmRouter from "./deleteFilm.router.js"




const router = express.Router()

router.use("/film4", viewRouter)
router.use("/film4", sigupRouter)
router.use("/film4", authRouter)
router.use("/film4", postfilmRouter)
router.use("/film4/edit", editFilmRouter)
router.use("/film4/delete", deleteFilmRouter)







export default router

