import React, { useState } from "react";
import { useSelector } from "react-redux";

const Login = ({ setLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const userData = useSelector((state) => state.user.user);
  const register = () => {
    setLogin("");
  };

  const login = () => {
    if (userData.email === email && userData.password === pass) {
      setLogin("home");
    } else {
      alert("Invalid user");
    }
  };

  return (
    <div className="register">
      <div className="registerContainer">
        <h1>Login</h1>
        <div className="section">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="section">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={pass}
            id="password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="buttonArea">
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
          <button className="btn btn-secondary" onClick={register}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
