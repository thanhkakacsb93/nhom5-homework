import express from "express"
import MovieStore from "../utils/mokedata.film.js"
import middlewareAuthAdm from "../middleware/middleware.autAdm.js"
const router = express.Router()
// let MovieStore = [
//     {
//         "id": 1,
//         "name": "Titanic",
//         "isFree": true
//     },
//     {
//         "id": 2,
//         "name": "Avenger",
//         "isFree": false
//     },
//     {
//         "id": 3,
//         "name": "Iron Man",
//         "isFree": false
//     },
//     {
//         "id": 4,
//         "name": "Batman",
//         "isFree": false
//     },
//     {
//         "id": 5,
//         "name": "Iron Man 2",
//         "isFree": false
//     },
//     {
//         "id": 6,
//         "name": "Iron Man 3",
//         "isFree": false
//     },
//     {
//         "id": 7,
//         "name": "Tenet",
//         "isFree": false
//     },
//     {
//         "id": 8,
//         "name": "Inception",
//         "isFree": true
//     }
// ];

// router.patch("/edit/:namefilm", middlewareAuthAdm, (req, res) => {
router.delete("/:namefilm", middlewareAuthAdm, (req, res) => {

    const { namefilm } = req.params
    let Filmedit = MovieStore.filter((item) => item.name === namefilm)
    if (!Filmedit) {
        res.status(400).json({
            message: "Movie not found"
        })
    }

    MovieStore = MovieStore.filter((film) => film.name != namefilm) //vì sao đặt lại MovieStore= nó lại báo lỗi const

    res.json({
        data: MovieStore
    })
})
export default router
