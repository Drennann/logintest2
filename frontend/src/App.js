import {Routes, Route} from "react-router-dom";
import { useState } from "react";
import './App.css';
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import DashBoard from "./pages/DashBoard";
import CreateCharacter from "./pages/CreateCharacter";
import Road from "./pages/Road";

function App() {

  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Routes>
      <Route path="/LogIn" element={<LogIn username={username} setUsername={setUsername}/>}></Route>
      <Route path="/Register" element={<Register username={username} setUsername={setUsername}/>}></Route>
      <Route path="/Dashboard" element={<DashBoard username={username} setUsername={setUsername} loading={loading} setLoading = {setLoading}/>}></Route>
      <Route path="/CreateCharacter" element={<CreateCharacter username={username} setUsername={setUsername} loading={loading} setLoading = {setLoading}/>}></Route>
      <Route path="/Road" element={<Road username={username} loading={loading} setLoading = {setLoading} setUsername={setUsername}/>}></Route>
    </Routes>
  );
}

export default App;
