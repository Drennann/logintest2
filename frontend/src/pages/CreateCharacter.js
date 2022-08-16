import "./CreateCharacter.css";
import { useEffect, useState } from "react";
import { selectWithRarity } from "../libs/auxiliares.js";
import { useNavigate } from "react-router-dom";

export default function CreateCharacter ({setLoading, loading, username, setUsername}) {

    let [data, setData] = useState({});

    let navigate = useNavigate();

    useEffect(()=>{
        setLoading(true);
        (async () => {
            let res = await fetch("http://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion.json");
            res = await res.json();
            setData(res.data);
        })()
        let userLocalStorage = localStorage.getItem("id")
        setUsername(userLocalStorage)
        setLoading(false);
    },[])

    const createTank = async () =>{
        let keys = Object.keys(data);
        let Tanks = keys.filter(key => data[key].tags.includes("Tank"));
        let championSelected = selectWithRarity(Tanks);
        let stats = data[championSelected].stats;
        await fetch("/api/characters",{
            headers:{"Content-Type": "Application/json"},
            method: "POST",
            body: JSON.stringify(
                {ImgURL: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+championSelected+"_0.jpg", stats, energy: 100, level: 1, classCharacter: "Tank", counteredBy: ["Marksman"], countersTo: ["Assassin"], owner: username})
            })
        navigate("../DashBoard")
        };
        const createAssasin = async () =>{
            let keys = Object.keys(data);
            let Assassins = keys.filter(key => data[key].tags.includes("Assassin"));
            let championSelected = selectWithRarity(Assassins);
            let stats = data[championSelected].stats;
            await fetch("/api/characters",{
                headers:{"Content-Type": "Application/json"},
                method: "POST",
                body: JSON.stringify(
                    {ImgURL: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+championSelected+"_0.jpg", stats, energy: 100, level: 1, classCharacter: "Assassin", counteredBy: ["Tank"], countersTo: ["Marksman"], owner: username})
                })
            navigate("../DashBoard")
            };
            const createMarksman = async () =>{
                let keys = Object.keys(data);
                let Marksmans = keys.filter(key => data[key].tags.includes("Marksman"));
                let championSelected = selectWithRarity(Marksmans);
                let stats = data[championSelected].stats;
                await fetch("/api/characters",{
                    headers:{"Content-Type": "Application/json"},
                    method: "POST",
                    body: JSON.stringify(
                        {ImgURL: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+championSelected+"_0.jpg", stats, energy: 100, level: 1, classCharacter: "Marksman", counteredBy: ["Assassin"], countersTo: ["Tank"], owner: username})
                    })
                navigate("../DashBoard")
                };
        return(
            <div>
                {loading? <p>loading...</p> : 
                    <div>
                        <h1>Choose your character</h1>
                        <ul>
                            <li onClick={createTank}>
                                Tank
                            </li>
                            <li onClick={createAssasin}>
                                Assasin
                            </li>
                            <li onClick={createMarksman}>
                                Marksman
                            </li>
                        </ul>
                    </div>}
            </div>
        )
    }

