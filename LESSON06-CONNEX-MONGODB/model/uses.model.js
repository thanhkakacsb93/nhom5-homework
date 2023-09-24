import mongoose from "mongoose";

const useSchemas = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    passwould: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "member"
    },
    confirmation: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const Usermodel = mongoose.model("DataUsers", useSchemas)

export default Usermodel