import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../redux/reducers/profileReducer";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import "./Navbar.css";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
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

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

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

    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton> */}
            <div>
              <Button
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
                color="inherit"
              >
                <MenuIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                {/* TODO: seperate the About page. add a link for the about page to routes */}
                {/* <Link to="/learnmore"> */}
                <MenuItem onClick={this.handleClose}>About Ridley</MenuItem>
                {/* </Link> */}
                <Link to="/learnmore">
                  <MenuItem onClick={this.handleClose}>Learn More</MenuItem>
                </Link>
                <Divider />
                <Link to="/incomestatement">
                  <MenuItem onClick={this.handleClose}>
                    Step 1: Income Statement
                  </MenuItem>
                </Link>
                <Link to="/nestegg">
                  <MenuItem onClick={this.handleClose}>
                    Step 2: Nest Egg
                  </MenuItem>
                </Link>
                <Link to="/retirementplan">
                  <MenuItem onClick={this.handleClose}>
                    Step 3: Retirement Plan
                  </MenuItem>
                </Link>
                <Link to="/desiredpurchases">
                  <MenuItem onClick={this.handleClose}>
                    Step 4: Desired Purchases
                  </MenuItem>
                </Link>
              </Menu>
            </div>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Ridley
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </div>

      // <div style={{ height: "200vh" }}>
      // <div>
      //
      //   <div className={scrolltoggle}>
      //     <div className="navbar-name">{appname}</div>

      //     <ul className="nav-items">
      //       <li className="has-divider learnmore">
      //         <Link to="/learnmore">
      //           <div>Learn More </div>
      //         </Link>
      //       </li>

      //       <li className="has-divider">{logtoggle}</li>
      //     </ul>
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(withStyles(styles)(Navbar));
