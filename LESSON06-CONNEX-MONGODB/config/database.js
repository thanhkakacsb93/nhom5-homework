import mongoose from "mongoose"

const mongo_url = process.env.MONGO_URL

const connectToMongodb = async () => {
    try {
        const connectDTB = await mongoose.connect(mongo_url)
        console.log("connect is successfully")
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

export { connectToMongodb }




// import { MongoClient } from "mongodb"

// const client_url = 'mongodb://127.0.0.1:27017'
// const namedatabase = "homework-lesson06-connext-mongodb"
// const db = {}
// const connectToMongodb = async () => {
//     try {

//         const clinet = new MongoClient(client_url)
//         await clinet.connect()
//         console.log("clinet connect successfuly")

//         const database = clinet.db(namedatabase)
//         db.dataUser = database.collection("dataUser")
//         const adm = {
//             username: "admin",
//             passwould: "123",
//             role: "admin",
//             confirmantion: true
//         }
//         const checkUserAdm = await db.dataUser.findOne({ username: "admin" })
//         if (!checkUserAdm) {
//             await db.dataUser.insertOne(adm)
//         }

//     } catch (error) {
//         console.error('connect database failed', error);
//         process.exit(1);

//     }

// }
// export { connectToMongodb, db }