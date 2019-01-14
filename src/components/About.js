import React, { Component } from "react";
import "./About.css";

import Navbar from "./Navbar";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // loggedIn: false
    };
  }

  handleReturnBtn() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="aboutdisplay">
        <div>
          <Navbar />
        </div>
        <div className="LearnMore-title">
          <h1>About Ridley</h1>
        </div>

        <div className="infobox">
          <span className="infosection">
            <h2>HOW THE APP WORKS</h2>
            <p>
              The application will help you build an income statement. A
              breakdown of your expenses will be available via email. You will
              then be able to explore the results of different savings rates and
              choose what percentage is right for you.
            </p>
          </span>

          <span className="infosection">
            <h2>WHAT</h2>
            <p>Early Retirement Made Easy</p>
            <p>Promote FIRE (Financial Independence Retire Early)</p>
            <p>
              This application calculates how much you will need to be
              financially independent and provides you with the number of work
              years you have left.
            </p>
            <p>
              The goal of this application is to make personal financing fun and
              easy. Plan for success, execute accordingly.
            </p>
          </span>

          <span className="infosection">
            <h2>WHO</h2>
            <p>
              This application is for people with consistant expenses who are
              able to save a portion of their paycheck to retirement. If that
              sounds like you, then this app is for you!
            </p>
          </span>

          <span className="infosection">
            <h2>WHERE</h2>
            <p>
              As long as you are spending less than you are earning, you can
              save for retirement anywhere!
            </p>
          </span>

          <span className="infosection">
            <h2>WHY</h2>
            <p>
              Budgeting is important and being financially capable is a win.
              This application should make you aware of your spending habits
              which is a great start towards financial independence.
            </p>
          </span>

          <span className="infosection">
            <h2>WHEN</h2>
            <p>
              Anytime is a good time to use this app! We recommend revisiting
              this application every month to refinance your personal budget and
              set goals.
            </p>
          </span>

          <h3 className="ReturnToAppBtn">
            <button onClick={() => this.handleReturnBtn()}>Go Back!</button>
          </h3>
        </div>
      </div>
    );
  }
}

export default About;
