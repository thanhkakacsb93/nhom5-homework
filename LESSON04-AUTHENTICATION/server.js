import express from "express"
import appRouter from "./routers/index.js"

import "dotenv/config"

const app = express()
const PORT = 3004
app.use(express.json());
app.use("/api/v1", appRouter)



app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})