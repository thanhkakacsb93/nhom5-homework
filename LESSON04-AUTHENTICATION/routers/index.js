import express from "express"
import viewRouter from "./viewFilm.router.js"
import sigupRouter from "./sigup.router.js"


const router = express.Router()

router.use("/film4", viewRouter)
router.use("/film4", sigupRouter)



export default router

