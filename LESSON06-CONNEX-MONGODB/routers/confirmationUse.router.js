import express from "express"
import confirmation from "../middleware/middle.confirmation.js"

const router = express.Router()

router.put("/confirmationUser", confirmation, (req, res) => {

    res.json({
        message: "tài khoản đã được kích hoạt"
    })

})
export default router