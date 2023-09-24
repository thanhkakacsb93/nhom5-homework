import express from "express"
import middlewareSigup from "../middleware/middleware.sigup.js"


const router = express.Router()

router.post("/sigup", middlewareSigup, (req, res) => {

})

export default router