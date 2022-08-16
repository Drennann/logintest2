import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import ChampionCard from "../components/ChampionCard";
import "./DashBoard.css"

export default function DashBoard({username, setUsername, loading, setLoading}) {

    let navigate = useNavigate();
    let token = localStorage.getItem("token");
    const [ownersCharacters, setOwnersCharacters] = useState([]);

    if(!token){
        navigate("../LogIn")
    }

    useEffect(()=>{
        let userLocalStorage = localStorage.getItem("id");
        setUsername(userLocalStorage);
        (async ()=>{
            let res = await fetch("/api/characters/owner/"+userLocalStorage);
            res = await res.json();
            setOwnersCharacters(res);
        })()
    },[])

    return(
        <div className="CardsContainer">
            {loading? <p>Loading...</p>: ownersCharacters.map( c => <ChampionCard key={c._id} data={c}/>)}
        </div>
    )
}