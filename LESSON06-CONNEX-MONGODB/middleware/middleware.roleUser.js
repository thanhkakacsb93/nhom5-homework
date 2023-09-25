
import jwt from "jsonwebtoken"
import filmModel from "../model/film.model.js"
const middlewareRoleUser = async (req, res, next) => {
    try {
        const accesstoken = req.headers["x-access-token"]
        if (!accesstoken) {
            const filmFree = await filmModel.find({ isFree: false })
            return res.json({
                data: filmFree
            })
        }

        const checktoken = jwt.verify(accesstoken, process.env.KEY)
        const AllFilm = await filmModel.find({})
        res.json({
            data: AllFilm,
        })

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

export default middlewareRoleUser