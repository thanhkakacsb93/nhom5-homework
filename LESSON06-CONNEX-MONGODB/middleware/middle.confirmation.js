import jwt from "jsonwebtoken"
import Usermodel from "../model/uses.model.js"
const confirmation = async (req, res, next) => {
    try {
        const accesstoken = req.headers["x-accesstoken-configmation"]
        const checktoken = jwt.verify(accesstoken, process.env.KEY_SIGUP)
        console.log("checktoken:", checktoken)
        await Usermodel.updateOne({ username: checktoken.username }, { confirmation: true })
        console.log("checktoken.confirmation:", checktoken.confirmation)
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            res.status(400).json({
                message: "token is Expired"
            })
        }
        else {
            return res.status(400).json({
                message: "something went wrong"
            })
        }
    }

    next()
}
export default confirmation