import express from "express"
import MovieStore from "../utils/mokedata.film.js"
import middlewareAuthAdm from "../middleware/middleware.autAdm.js"
const router = express.Router()

router.patch("/edit/:namefilm", middlewareAuthAdm, (req, res) => {
    const { namefilm } = req.params
    const { name, isFree } = req.body
    //trường hợp này chưa xử lý được fix bug lỗi biến hằng số
    // let Filmedit = MovieStore.filter((item) => item.name === namefilm)
    // if (!Filmedit) {
    //     res.status(400).json({
    //         message: "Movie not found"
    //     })
    // }

    // if (!name || !isFree) {
    //     res.status(400).json({
    //         message: "Enter the information you want to update"
    //     })
    // }

    // MovieStore = [...MovieStore].map((film) => film.name === namefilm ? { id: film.id, name, isFree } : film) //vì sao đặt lại MovieStore= nó lại báo lỗi const

    // xử lý bằng cách 2. thay đổi giá trị của object
    let Filmedit = MovieStore.reduce((a, item, index) => {
        if (item.name === namefilm) { a.push(index) }
        return a;
    }, [])
    if (!Filmedit.length) {
        res.status(400).json({
            message: "Movie not found"
        })
    }

    if (!name || !isFree) {
        res.status(400).json({
            message: "Enter the information you want to update"
        })
    }

    for (let i = 0; i < Filmedit.length; i++) {
        MovieStore[Filmedit[i]].name = name;
        MovieStore[Filmedit[i]].isFree = isFree
    }

    res.json({
        data: MovieStore
    })
})
export default router
