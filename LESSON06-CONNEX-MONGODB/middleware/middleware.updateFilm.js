import filmModel from "../model/film.model.js"

const middlewareUpdateFilm = async (req, res, next) => {
    const { namefilm } = req.params
    const { name, isFree } = req.body
    console.log(namefilm)
    let Filmedit = await filmModel.findOne({ name: namefilm })
    console.log("Filmedit", Filmedit)
    if (!Filmedit) {
        return res.status(400).json({
            message: "Movie not found"
        })
    }

    const checkNameFilm = await filmModel.findOne({ name })
    if (checkNameFilm) {
        return res.status(400).json(
            {
                message: `name ${name} already exits`
            }
        )
    }

    const updateFilm = {
        ...(name && { name }),
        ...(isFree && { isFree })
    }

    await filmModel.updateOne({ name: namefilm }, updateFilm)
    next()
}
export default middlewareUpdateFilm