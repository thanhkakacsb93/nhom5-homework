import MovieStore from "../utils/mokedata.film.js"
import jwt from "jsonwebtoken"
import { v4 as uuidv4 } from "uuid"


const middlewareAuthAdm = (req, res, next) => {
    try {
        const accesstoken = req.headers["x-access-token-adm"]
        if (!accesstoken) {
            res.status(400).json({
                message: "token is wrong"
            })
        }
        const checktoken = jwt.verify(accesstoken, process.env.KEY)
        console.log("checktoken:", checktoken.role)

        if (checktoken.role != "admin") {
            res.json({
                message: "not under authority"
            })
        }

    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(400).json({
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

export default middlewareAuthAdm