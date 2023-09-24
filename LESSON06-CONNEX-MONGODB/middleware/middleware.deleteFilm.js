import filmModel from "../model/film.model.js"

const middlewareDeleteFilm = async (req, res, next) => {
    const { namefilm } = req.params
    let Filmedit = await filmModel.findOne({ name: namefilm })
    if (!Filmedit) {
        return res.status(400).json({
            message: "Movie not found"
        })
    }
    await filmModel.deleteOne({ name: namefilm })
    next()
}
export default middlewareDeleteFilm