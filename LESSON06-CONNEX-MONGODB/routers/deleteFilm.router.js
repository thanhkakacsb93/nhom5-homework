import express from "express"
import middlewareAuthAdm from "../middleware/middleware.autAdm.js"
import middlewareDeleteFilm from "../middleware/middleware.deleteFilm.js"
const router = express.Router()

router.delete("/:namefilm", middlewareDeleteFilm, (req, res) => {
    const { namefilm } = req.params

    res.json({
        message: `${namefilm} hass been deleted`
    })
})
export default router
