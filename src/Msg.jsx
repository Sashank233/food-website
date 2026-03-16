import React from "react";
import { useNavigate } from "react-router-dom";
import "./Msg.css";

function Msg() {

  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    nav("/login");
  };

  const handleContinue = () => {
    nav("/");
  };

  return (

    <div className="msg-container">

      <div className="msg-card">

        <h2>Welcome {user?.email}</h2>

        <div className="msg-buttons">

          <button className="continue-btn" onClick={handleContinue}>
            Continue
          </button>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>

        </div>

      </div>

    </div>

  );
}

export default Msg;