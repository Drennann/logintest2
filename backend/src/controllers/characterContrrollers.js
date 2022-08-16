import Character from "../models/Character.js";

export const getCharacters = async (req, res) => {
    try{
        let characters = await Character.find();
        res.send(characters)
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const postCharacter = async (req, res) => {
    try{
        let {ImgURL, stats, energy, level, power, classCharacter, counteredBy, countersTo, owner} = req.body;

        let newCharacter = new Character({ImgURL, stats, energy, level, power, classCharacter, counteredBy, countersTo, owner});
        await newCharacter.save();
        res.send("Character created.");
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const putCharacter = async (req, res) => {
    try{
        let {id} = req.params;
        let {ImgURL, stats, energy, level, power, classCharacter, counteredBy, countersTo, owner} = req.body;
        await Character.findOneAndUpdate(id, {ImgURL, stats, energy, level, power, classCharacter, counteredBy, countersTo, owner});
        res.send("Character actualized.")
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const deleteCharacter = async (req, res) => {
    try{
        let {id} = req.params;
        await Character.findOneAndDelete(id);
        res.send("Character Deleted.")
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const getCharacter = async (req, res) => {
    try{
        let {id} = req.params;
        let character = await Character.findById(id);
        res.send(character);
    }
    catch(e){
        res.status(401).send(e)
    }
}
export const getCharactersByOwner = async (req, res) => {
    try{
        let {owner} = req.params;
        let characters = await Character.find({owner});
        res.send(characters)
    }
    catch(e){
        res.status(401).send(e)
    }
}