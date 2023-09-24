import express from "express"
import middlewareAuthAdm from "../middleware/middleware.autAdm.js"
import middlewareUpdateFilm from "../middleware/middleware.updateFilm.js"
const router = express.Router()

router.patch("/:namefilm", middlewareUpdateFilm, (req, res) => {

    res.json({
        message: "đã cập nhật"
    })
})
export default router
