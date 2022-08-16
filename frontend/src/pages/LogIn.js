import LoginForm from "../components/LogInForm";

export default function LogIn ({username, setUsername}) {
    return(
        <>
            <LoginForm username={username} setUsername={setUsername}/>
        </>
    )
}