import filmModel from "../model/film.model.js"

const middlewarePostFilm = async (req, res, next) => {
    const { name, isFree } = req.body
    if (!name || !isFree) {
        // vì sao không có return nó lại báo lỗi.????????
        return res.status(400).json({
            message: "name or isFree wrong"
        })
    }
    const checkNameFilm = await filmModel.findOne({ name })
    if (checkNameFilm) {

        return res.status(400).json({
            message: `${name} already exits`
        })
    }

    const newFilm = new filmModel({
        name,
        isFree
    })
    await newFilm.save()

    res.status(201).json({
        message: "thêm thành công"
    })

    next()
}

export default middlewarePostFilm