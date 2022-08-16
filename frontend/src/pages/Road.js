import Level from "../components/Level";
import "./Road.css"

export default function Road({username, setUsername}){
    return(
        <div className="Road">
            <Level rank= {require("../components/imgs/challenger.png")} username={username} setUsername={setUsername} stage={2}/>
            <Level username={username} setUsername={setUsername}/>
            <Level username={username} setUsername={setUsername}/>
            <Level username={username} setUsername={setUsername}/>
        </div>
    )
}