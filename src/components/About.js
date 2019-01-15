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
              The application will first help you build an income statement. A
              breakdown of your expenses will be available via email. The
              application will calculate your retirement amount and how many
              years of work you have left.
            </p>
            <br />
            <p>
              You will then be able to explore the results of different savings
              rates and choose what percentage is right for you.
            </p>
          </span>

          <span className="infosection">
            <h2>WHAT</h2>
            <p>
              This application makes personal financing fun and simple, it is a
              retirement solution made easy
            </p>
            <br />
            <p>
              The goal of the app is to promote FIRE (Financial Independence
              Retire Early) and give the user a realistic expectation on what it
              will take to reach the calculated retirement amount. Plan for
              success, execute accordingly.
            </p>
            <br />
            <p>
              There is a bonus section that helps bring conscious spending to
              the user, and a bunch of great links for extended education on
              personal finance in the Learn More section.
            </p>
          </span>

          <span className="infosection">
            <h2>WHO</h2>
            <p>
              This application is for people with consistent income and
              consistent expenses, who are able to save a portion of their
              paycheck towards retirement. If that sounds like you, then this
              app is for you!
            </p>
            <br />
            <p>
              The app does not account for debt (aka school loans) and
              unexpected fees (aka tickets). There are just many variables and
              and different living situations. We hope that running through the
              application will give the user a sense of budgeting and a broad
              picture of where they stand in terms of retirement.
            </p>
          </span>

          <span className="infosection">
            <h2>WHERE</h2>
            <p>
              As long as you are spending less than you are earning, you can
              save for retirement anywhere!
            </p>
            <br />
            <p>
              There are many solutions to retirement. Ridley has taken the FIRE
              approach. It is the concept of figuring out your retirement amount
              and then increasing your monthly savings for an early retirement.
            </p>
          </span>

          <span className="infosection">
            <h2>WHY</h2>
            <p>
              Budgeting is important and being financially capable is a win.
              This application should make you aware of your spending habits
              which is a great start towards financial independence.
            </p>
            <br />
            <p>
              Ridley was created with friends in mind. We wanted to provide
              something that will be beneficial for the average person. We
              believe that having a sense of personal finance makes you
              stronger. The best part about this app is that we have done all
              the math for you.
            </p>
          </span>

          <span className="infosection">
            <h2>WHEN</h2>
            <p>Anytime is a good time to use this app!</p>
            <br />
            <p>
              We recommend revisiting Ridley every month to revise your budgets
              and set goals. Another good time to use this app is when your
              income or expenses drastically change. A raise in pay or new car
              payments can really take effect on your future. Keep your income
              statement up to date.
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
