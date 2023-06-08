import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./Redux/store";

const HomePage = ({ setLogin }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const logout = () => {
    dispatch(remove());
    setLogin("login");
  };
  return (
    <div className="home">
      <h1>Welcome to the Home Page!</h1>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.password}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default HomePage;
