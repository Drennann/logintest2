import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export let register = async (req, res) => {
    try{
        let {username, password, displayName} = req.body;
        let salt = bcrypt.genSaltSync(10);
        let passwordHashed = bcrypt.hashSync(password, salt);
        let newUser = new User({username, password: passwordHashed, displayName , assets: []});
        await newUser.save();
        let token = jwt.sign({id: newUser._id}, process.env.SECRET, {expiresIn: 60*60*24})
        res.json({token, id:newUser._id})
    }
    catch(e){
        res.status(401).send(e);
    }
}

export let logIn = async (req, res) => {
    let {username, password} = req.body;

    let userDB = (await User.find({username}))[0];
    
    if (bcrypt.compareSync(password, userDB.password)){
        let token = jwt.sign({id: userDB._id}, process.env.SECRET, {expiresIn: 60*60*24})
        res.json({token, id:userDB._id})
    }
    else{
        res.send("Credenciales incorrectas.")
    }

}