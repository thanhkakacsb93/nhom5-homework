import express from "express"
import MovieStore from "../utils/mokedata.film.js"
import middlewareAuthAdm from "../middleware/middleware.autAdm.js"
const router = express.Router()

router.delete("/:namefilm", middlewareAuthAdm, (req, res) => {
    const { namefilm } = req.params
    // let Filmedit = MovieStore.filter((item) => item.name === namefilm)
    // if (!Filmedit) {
    //     res.status(400).json({
    //         message: "Movie not found"
    //     })
    // }

    // MovieStore = MovieStore.filter((film) => film.name != namefilm) //vì sao đặt lại MovieStore= nó lại báo lỗi const

    let Filmedit = MovieStore.reduce((a, item, index) => {
        if (item.name === namefilm) { a.push(index) }
        return a;
    }, [])

    if (!Filmedit.length) {
        res.status(400).json({
            message: "Movie not found"
        })
    }

    for (let i = 0; i < Filmedit.length; i++) {
        if (i === 0) {
            MovieStore.splice(Filmedit[i], 1)
        }
        else {
            MovieStore.splice(Filmedit[i] - i, 1)
        }
    }

    res.json({
        data: MovieStore
    })
})
export default router
