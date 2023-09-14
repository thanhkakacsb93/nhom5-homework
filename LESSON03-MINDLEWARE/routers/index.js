import express from "express"
import studentRouter from "./Student.router.js"
import subjectRouter from "./Subject.router.js"
import teacherRouter from "./Teacher.router.js"
import statisticRouter from "./statistic.router.js"


const router = express.Router()
router.use('/system', statisticRouter)

router.use('/student', studentRouter)
router.use('/subject', subjectRouter)
router.use('/teacher', teacherRouter)



export default router

