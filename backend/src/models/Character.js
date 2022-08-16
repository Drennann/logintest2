import mongoose from "mongoose";

const CharacterSchema = new mongoose.Schema({

    energy:{
        type:Number,
    },
    level:{
        type:Number,
    },
    stats:{
        type: Object,
    }
    ,
    classCharacter:{
        type:String,
    },
    counteredBy:{
        type:[String]
    },
    countersTo:{
        type:[String]
    },
    owner:{
        type: String,
        require: true
    },
    ImgURL:{
        type:String,
    }
})

export default mongoose.model("Character", CharacterSchema)