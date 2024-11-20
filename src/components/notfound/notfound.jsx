import React from "react";
import { useNavigate } from "react-router-dom";
import "./notfound.css";

function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home"); // Adjust the path as per your routes
  };

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">
        Oops! The page you are looking for doesn't exist.
      </p>
      <button className="not-found-button" onClick={goHome}>
        Go Back Home
      </button>
    </div>
  );
}

export default NotFound;
