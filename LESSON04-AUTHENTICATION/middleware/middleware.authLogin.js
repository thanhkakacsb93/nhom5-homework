import MovieStore from "../utils/mokedata.film.js"
import jwt from "jsonwebtoken"
const middlewareAuthLogin = (req, res, next) => {
    try {
        const accesstoken = req.headers["x-access-token"]
        if (accesstoken === undefined) { //trường hợp đặt điều kiện là !accesstoken thì gặp tình huống như dưới
            const filmFree = MovieStore.filter((film) => film.isFree === true)
            res.json({
                data: filmFree
            })
        }
        // else {  //sao khi đặt else thì tẻminal không báo lỗi, còn khi tắt đi thì vẫn báo lỗi. mặc dù kết quả ở postman cho ra vẫn đúng
        const checktoken = jwt.verify(accesstoken, process.env.KEY)

        // }

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

export default middlewareAuthLogin