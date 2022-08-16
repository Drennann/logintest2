import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res) => {
    try{
        let users = await User.find();
        res.send(users)
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const postUser = async (req, res) => {
    try{
        let {username, password, displayName, assets} = req.body;
        let salt = bcrypt.genSaltSync(10);
        let passwordHashed = bcrypt.hashSync(password, salt);
        let newUser = new User({username, password: passwordHashed, displayName, assets});
        await newUser.save();
        res.send("User created.");
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const putUser = async (req, res) => {
    try{
        let {id} = req.params;
        let {username, password, displayName, assets} = req.body;
        let salt = bcrypt.genSaltSync(10);
        let passwordHashed = bcrypt.hashSync(password, salt);
        await User.findOneAndUpdate(id, {username, password: passwordHashed, displayName, assets});
        res.send("User actualized.")
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const deleteUser = async (req, res) => {
    try{
        let {id} = req.params;
        await User.findOneAndDelete(id);
        res.send("User Deleted.")
    }
    catch(e){
        res.status(401).send(e)
    }
}

export const getUser = async (req, res) => {
    try{
        let {id} = req.params;
        let user = await User.findById(id);
        res.send(user);
    }
    catch(e){
        res.status(401).send(e)
    }
}