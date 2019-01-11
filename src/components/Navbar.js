import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../redux/reducers/profileReducer";
import "./Navbar.css";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";

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
      anchorEl: null
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    console.log(this.props);

    // const redirectLogin = () => {
    //   window.location.href = `${process.env.REACT_APP_SERVER}/login`;
    // };
    const redirectLogout = () => {
      window.location.href = `${process.env.REACT_APP_SERVER}/logout`;
    };

    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
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
                <Link to="/about">
                  <MenuItem onClick={this.handleClose}>About Ridley</MenuItem>
                </Link>
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
              <p className="ridleynavbar">Ridley</p>
            </Typography>

            <Button color="inherit" onClick={() => redirectLogout()}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(withStyles(styles)(Navbar));
