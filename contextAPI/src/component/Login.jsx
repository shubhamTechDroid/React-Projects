import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [uname,setUname] = useState("");
    const [pass,setPass] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({uname,pass});
    }
  return (
    <div>
    <h2>Login</h2>
    <input type="text" placeholder='username' value={uname} onChange={(e)=>setUname(e.target.value)}/>
    <input type="text" placeholder='password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login