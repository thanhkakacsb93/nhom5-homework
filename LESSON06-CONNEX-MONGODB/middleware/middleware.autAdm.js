import jwt from "jsonwebtoken"

const middlewareAuthAdm = (req, res, next) => {
    try {
        const accesstoken = req.headers["x-access-token-adm"]
        if (!accesstoken) {
            return res.status(400).json({
                message: "token is wrong"
            })
        }
        const checktoken = jwt.verify(accesstoken, process.env.KEY)

        if (checktoken.role != "admin") {
            return res.json({
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