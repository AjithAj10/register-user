import React, { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { save,remove } from "./Redux/store";

const Register = ({setLogin}) => {
  const dispatch = useDispatch();

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')

  const clear = () => {
    setEmail('');
    setName('');
    setPass('')

    dispatch(remove())
  }

  const submit = () => {
    if(name && email && pass){
    dispatch(save({name: name,email: email,password: pass}))
     setLogin('login')
  }else{
    alert("All fields are required");
  }
  }
  return (
    <div className="register">
      <div className="registerContainer">
        <h1>Register</h1>

        <div className="section">
          <label htmlFor="name">Name</label>
          <input type="text" value={name} id="name" onChange={e => setName(e.target.value)} />
        </div>
        <div className="section">
          <label htmlFor="email">Email</label>
          <input type="email" value={email} id="email" onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="section">
          <label htmlFor="password">Password</label>
          <input type="password" value={pass} id="password" onChange={e => setPass(e.target.value)}/>
        </div>
        <div className="buttonArea">
        <button className="btn btn-primary" onClick={submit}>Register</button>
        <button className="btn btn-secondary" onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
