import users from "../utils/mokedata.film.js"
import arrcouter from "../utils/datacout.js"
const middlewareCheckApikey = (req, res, next) => {
    const { apikey } = req.params
    // const pathBeforeParams = req.baseUrl;
    let checkApi = users.find((user) => user.apiKey === apikey)
    if (!checkApi) {
        res.status(400).json({
            message: "apikey fault"
        })
    }
    // console.log("pathBeforeParams", pathBeforeParams)
    next();
}

export default middlewareCheckApikey