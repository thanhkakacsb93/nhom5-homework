import mongoose from "mongoose";

const filmchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    isFree: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const filmModel = mongoose.model("DATAFILMS", filmchema)

export default filmModel