import {Router} from "express";
import Character from "../models/Character.js";

const figthRouter = Router();

figthRouter.post("/", async (req, res) => {
    let {id, energy} = req.body;
    let character = await Character.findByIdAndUpdate(id, {energy: energy - 20});
    res.send(character)
})

export default figthRouter;