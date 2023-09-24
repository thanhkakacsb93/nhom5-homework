import express from "express"
import middlewareRoleUser from "../middleware/middleware.roleUser.js"

const router = express.Router()

router.get("/view", middlewareRoleUser, (req, res) => {

})

export default router