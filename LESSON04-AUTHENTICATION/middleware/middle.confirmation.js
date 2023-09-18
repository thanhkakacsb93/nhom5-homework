
import users from "../utils/mokedata.user.js"
import jwt from "jsonwebtoken"
const confirmation = (req, res, next) => {
    try {
        const accesstoken = req.headers["x-accesstoken-configmation"]
        const checktoken = jwt.verify(accesstoken, process.env.KEY_SIGUP)
        delete checktoken.iat
        delete checktoken.exp

        users.push(checktoken)

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