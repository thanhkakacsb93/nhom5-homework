import arrcouter from "../utils/datacout.js";
import MovieStore from "../utils/mokedata.film.js";
const middlewareCount = (req, res, next) => {
    const { apikey } = req.params
    const pathBeforeParams = req.baseUrl;

    let checkApi = users.find((user) => user.apiKey === apikey)
    let index = arrcouter.findIndex((item) => item.user === checkApi.username)
    let path = pathBeforeParams.slice(8)
    arrcouter[index][path] = arrcouter[index][path] + 1
    console.log("arrcouter truy cập resourc", arrcouter)
    next()
}

export default middlewareCount