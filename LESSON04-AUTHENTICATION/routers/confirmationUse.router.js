import express from "express"
import confirmation from "../middleware/middle.confirmation.js"
import users from "../utils/mokedata.user.js"

const router = express.Router()

router.put("/confirmationUser", confirmation, (req, res) => {

    res.json({
        message: users
    })

})
export default router