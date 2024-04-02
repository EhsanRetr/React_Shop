import React, { useState } from 'react'
import Axios from "axios"
import "./login-style.css"
const Login = () => {
  const [usernamereg, setusernamereg] = useState("");
  const [passwordreg, setpasswordreg] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loginstatus, setloginstatus] = useState("");

  const login = ()=>{
    Axios.post("http://localhost:8080/login",
    {username: username, password: password})
    .then((response)=>{
      if (response.data.message) {
        setloginstatus(response.data.message)
      }else{
        setloginstatus(response.data[0].username)
      }
    })}
  const register = ()=>{
    Axios.post("http://localhost:8080/register",
    {username: usernamereg, password: passwordreg})
    .then((response)=>{
      console.log(response);
    })}
  return (
    <div>
      <div className="register-container">
        <h1>Register</h1>
        <input onChange={(e)=>{setusernamereg(e.target.value)}} type='text' placeholder='username'/>
        <input onChange={(e)=>{setpasswordreg(e.target.value)}} type="password" placeholder='password' />
        <button onClick={register}>register</button>
        </div>

        <div className="loginpage">
          <h1>Login</h1>
          <input onChange={(e)=>{setusername(e.target.value)}} type="Username" placeholder='username' />
          <input onChange={(e)=>{setpassword(e.target.value)}} type="Password" placeholder='password' />
          <button onClick={login}>Login</button>
          <h1>{loginstatus}</h1>
        </div>
    </div>
  )
}

export default Login