import React from "react";
import "../Login/Make.css";
import { useState } from "react";
const App = () => {
  const [action, setAction] = useState("");
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="undername"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <label>UserName</label>
              <input type="text"></input>
            </div>
          )}
          <div className="input">
            <label>Mail ID</label>
            <input type="email"></input>
          </div>
          <div className="input">
            <label>Password</label>
            <input type="password"></input>
          </div>
          <div className="forget-password">
            forget password?<span>Click here</span>
          </div>
          <div className="sub-btn">
            <button>Submit</button>
          </div>
        </div>
        <div className="sub-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
