import "./Level.css";
import { fight } from "../libs/auxiliares";
import { useState, useEffect } from "react";

export default function Level({setUsername, username, hp, attack, armor, rank = require("./imgs/challenger.png"), stage}){

    const [ownersCharacters, setOwnersCharacters] = useState([]);

    useEffect(()=>{
        let userLocalStorage = localStorage.getItem("id");
        (async ()=>{
            let res = await fetch("/api/characters/owner/"+userLocalStorage);
            res = await res.json();
            setOwnersCharacters(res);
            setUsername(userLocalStorage)
        })()
    },[])


    let bajarEnergia = async () => {
        if(ownersCharacters.every(c => c.energy >= 20)){
            let res1 = [];
            ownersCharacters.map(async c => {
                let res = await fetch("./api/fight",{
                    method:"POST",
                    headers:{
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify({
                        id: c._id,
                        energy: c.energy
                    })
                })
                res = await res.json();
                res1 = [...res1, res];
            })
            setOwnersCharacters(res1);
        }
        else{
            console.log("Plantilla exhausta")
        }
    }

    const fightHandler = async () => {

        await bajarEnergia();

        fight(ownersCharacters, stage)

        
        //conseguir experiencia
        //conseguir drop

    }

    return(
        <div className="Level">
            <img alt="img" src={rank} onClick={fightHandler}></img>
        </div>
    )
}