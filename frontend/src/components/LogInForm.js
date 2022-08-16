import { useNavigate } from "react-router-dom";

export default function LoginForm ({username, setUsername}){

    let navigate = useNavigate();

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        let username = e.target[0].value;
        let password = e.target[1].value;
        let token = await fetch("./api/auth/login", {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
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
                <input type="password"></input>
                <button>LogIn</button>
            </form>
        </>
    )
}