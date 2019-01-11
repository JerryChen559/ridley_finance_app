import React from "react";
import "./Home.css";

function Home() {
  const redirect = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };
  return (
    <div>
      <div className="homedisplay">
        <h1>Welcome to the Ridley Finance App</h1>
        <h2>Let us help you retire early.</h2>
        <span className="getstarted" onClick={() => redirect()}>
          Log In / Sign Up
        </span>
      </div>
    </div>
  );
}

export default Home;
