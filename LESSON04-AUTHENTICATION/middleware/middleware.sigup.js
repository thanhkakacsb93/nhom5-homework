import users from "../utils/mokedata.user.js"
const middlewareSigup = (req, res, next) => {
    const { username, passwould } = req.body;
    if (!username || !passwould) {
        res.status(400).json({
            message: "Missing required keys",
        });
    }
    const checkUserSigup = users.find((item) => item.username === username)
    if (checkUserSigup) {
        res.json({
            message: "username already exists"
        })
    }
    users.push({
        username,
        passwould,
        role: "member"
    })
    next()
}

export default middlewareSigup