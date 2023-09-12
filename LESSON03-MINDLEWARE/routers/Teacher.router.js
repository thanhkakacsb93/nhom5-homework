import express from "express"
import middlewareCheckApikey from "../middleware/middleware.checkApi.js"
import middlewareCount from "../middleware/middleware.count.js"


const router = express.Router()

router.get('/:apikey', middlewareCheckApikey, middlewareCount, (req, res) => {

    res.send(" dang truy cap vào resouce teacher")
})


export default router