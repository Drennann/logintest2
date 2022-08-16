import {Router} from "express";
import { deleteCharacter, getCharacters, postCharacter, putCharacter , getCharacter, getCharactersByOwner} from "../controllers/characterContrrollers.js";

const routerCharacter = Router();

routerCharacter.get("/", getCharacters)

routerCharacter.post("/", postCharacter)

routerCharacter.put("/:id", putCharacter)

routerCharacter.delete("/:id", deleteCharacter)

routerCharacter.get("/:id", getCharacter)

routerCharacter.get("/owner/:owner", getCharactersByOwner)

export default routerCharacter;