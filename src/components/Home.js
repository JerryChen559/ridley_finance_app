import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import Navbar from "./Navbar";

function Home() {
  const redirect = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="homedisplay">
        <h1>Welcome to the Ridley Finance App</h1>
        <h2>Let us help you retire early.</h2>
        <span className="getstarted" onClick={() => redirect()}>
          Get Started
        </span>
        {/* Comment out when done: Link to enter app without signing in */}
        {/* <Link to="/incomestatement">link to bypass login for now</Link> */}
      </div>
      <div className="aboutimage" />
      <div className="aboutdisplay">
        <span className="aboutwords">
          <h1>About Ridley</h1>
          <br />
          <p>
            <strong> - WHAT : </strong>Early Retirement Made Easy
          </p>
          <p>- Promote FIRE (Financial Independence Retire Early)</p>
          <p>
            - This application calculates how much you will need to be
            financially independent and provides you with the number of work
            years you have left.
          </p>
          <p>
            - The goal of this application is to make personal financing fun and
            easy. Plan for success, execute accordingly.
          </p>
          <br />
          <p>
            <strong> - WHO : </strong>This application is for people with
            consistant expenses who are able to save a portion of their paycheck
            to retirement. If that sounds like you, then this app is for you!
          </p>
          <br />
          <p>
            <strong> - HOW the App Works : </strong> The application will help
            you build an income statement. A breakdown of your expenses will be
            available via email. You will then be able to explore the results of
            different savings rates and choose what percentage is right for you.
          </p>
          <br />
          <p>
            <strong> - WHERE :</strong> As long as you are spending less than
            you are earning, you can save for retirement anywhere!
          </p>
          <br />
          <p>
            <strong> - WHEN :</strong> Anytime is a good time to use this app!
            We recommend revisiting this application every month to refinance
            your personal budget and set goals.
          </p>
          <br />
          <p>
            <strong> - WHY :</strong> Budgeting is important and being
            financially capable is a win. This application should make you aware
            of your spending habits which is a great start towards financial
            independence.
          </p>

          <h3>
            <Link to="/learnmore">Learn More</Link>
          </h3>
        </span>
      </div>
    </div>
  );
}

export default Home;
