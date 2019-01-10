import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../redux/reducers/profileReducer";

import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // loggedIn: false,
      // user: {}

      // toggle on Scroll
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    this.props.getUser();

    // toggle on Scroll
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  render() {
    console.log(this.props);

    const redirectLogin = () => {
      window.location.href = `${process.env.REACT_APP_SERVER}/login`;
    };
    const redirectLogout = () => {
      window.location.href = `${process.env.REACT_APP_SERVER}/logout`;
    };

    // Navbar background turns dark on scroll
    // plain js
    // I'm using the react way in this app.
    // var myNav = document.getElementById("mynav");
    // window.onscroll = function() {
    //   // "use strict";
    //   if (document.body.scrollTop >= 200) {
    //     myNav.classList.add("nav-colored");
    //     myNav.classList.remove("nav-transparent");
    //   } else {
    //     myNav.classList.add("nav-transparent");
    //     myNav.classList.remove("nav-colored");
    //   }
    // };

    // use this to conditionally render navbar based on loggedin state
    let appname = this.props.profile.loggedIn ? (
      <Link to="/incomestatement">Ridley</Link>
    ) : (
      <Link to="/">Ridley</Link>
    );

    let logtoggle = this.props.profile.loggedIn ? (
      <button
        className="signup"
        onClick={() => redirectLogout()}
        // style={{ color: "white" }}
      >
        Log Out
      </button>
    ) : (
      <button
        className="signup"
        onClick={() => redirectLogin()}
        // style={{ color: "white" }}
      >
        Log In / Sign Up
      </button>
    );

    // use this to conditionally render navbar
    // background color based on isTop state
    let scrolltoggle = this.state.isTop
      ? "nav-wrapper-transparent"
      : "nav-wrapper-dark";

    return (
      // <div style={{ height: "200vh" }}>
      <div>
        <div className={scrolltoggle}>
          <div className="navbar-name">{appname}</div>

          <ul className="nav-items">
            <li className="has-divider learnmore">
              <Link to="/learnmore">
                <div>Learn More </div>
              </Link>
            </li>

            <li className="has-divider">{logtoggle}</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(Navbar);
