import { useNavigate } from "react-router-dom";

export default function Register ({username, setUsername}) {

    let navigate = useNavigate();

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        let username = e.target[0].value;
        let displayName = e.target[1].value;
        let password = e.target[2].value;
        let token = await fetch("./api/auth/register", {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                displayName
            })
        });
        token = await token.json();
        localStorage.setItem("token", token.token);
        localStorage.setItem("id", token.id);

        setUsername(token.id)

        navigate("../Dashboard")
        
    } 

    return(
        <>
            <form onSubmit={onSubmitHandler}>
                <input type="text"></input>
                <input type="text"></input>
                <input type="password"></input>
                <button>Register</button>
            </form>
        </>
    )
}