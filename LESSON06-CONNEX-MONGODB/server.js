import express from "express"
import appRouter from "./routers/index.js"
import "dotenv/config"
import { connectToMongodb } from "./config/database.js"
import Usermodel from "./model/uses.model.js"
import bcrypt from "bcrypt"

const app = express()
const PORT = 3004

connectToMongodb()

const functionCheckADM = async () => {
    const checkAdm1 = await Usermodel.findOne({ username: "admin" })
    if (!checkAdm1) {
        const passAdm = process.env.PASSWORDADM
        const difficult = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(passAdm, difficult)
        const userAdm = new Usermodel({
            username: "admin",
            passwould: hashPassword,
            role: "admin",
            confirmation: true
        })
        await userAdm.save()
    }
}
functionCheckADM()
app.use(express.json());
app.use("/api/v1", appRouter)

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})