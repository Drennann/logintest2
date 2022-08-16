import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        trim: true,
        require: true
    },
    password:{
        type: String,
        trim: true,
        require: true
    },
    displayName:{
        type: String,
        unique: true,
        trim: true,
        require: true
    },
    assets:{
        type: [Object]
    }
})

export default mongoose.model("User", UserSchema);