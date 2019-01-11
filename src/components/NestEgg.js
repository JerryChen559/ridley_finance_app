import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import moment from "moment";
import "./Nestegg.css";

import cherryblossom from "../Assets/garden/cherryblossom.svg";
import dogrose from "../Assets/garden/dogrose.svg";
import flowerblue from "../Assets/garden/flowerblue.svg";
import flowerorange from "../Assets/garden/flowerorange.svg";
import flowersix from "../Assets/garden/flowersix.svg";
import flowerthree from "../Assets/garden/flowerthree.svg";
import lotusa from "../Assets/garden/lotusa.svg";
import lotusb from "../Assets/garden/lotusb.svg";
import roseone from "../Assets/garden/roseone.svg";
import sakura from "../Assets/garden/sakura.svg";
import sunflowerone from "../Assets/garden/sunflowerone.svg";
import sunflowertwo from "../Assets/garden/sunflowertwo.svg";
import sunflowerthree from "../Assets/garden/sunflowerthree.svg";

import Navbar from "./Navbar";
import "./Navbar.css";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const styles = {
  card: {
    marginTop: "10px",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class NestEgg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      depositemergency: "",
      depositretirement: "",
      emergencyfund: [],
      retirementfund: [],
      funds: [],
      alldeposits: [],
      flowers: [
        cherryblossom,
        dogrose,
        flowerblue,
        flowerorange,
        flowersix,
        flowerthree,
        lotusa,
        lotusb,
        roseone,
        sakura,
        sunflowerone,
        sunflowertwo,
        sunflowerthree
      ]
    };

    // this.drill = this.drill.bind(this);
  }

  componentDidMount() {
    this.getUserDeposits();
  }

  // get all deposits by user id
  // set state so that it can be displayed across the page
  getUserDeposits() {
    console.log("User", this.props.profile.user.user_id);
    axios
      .get(`/api/userdeposits/${this.props.profile.user.user_id}`)
      .then(response => {
        console.log("response.data", response.data);
        this.setState({
          alldeposits: response.data
        });
      });
  }

  handleInput(key, val) {
    this.setState({ [key]: val });
  }

  // Add a deposit to the emergency fund.
  submitEmergencyDeposit() {
    const { depositemergency } = this.state;
    axios
      .post("/api/addemergencydeposit", {
        user_id: this.props.profile.user.user_id,
        depositemergency
      })
      .then(response => {
        console.log("efund", response);
        this.setState({
          alldeposits: response.data,
          depositemergency: ""
        });
        // this.setState(
        //   {
        //     alldeposits: response.data,
        //     depositemergency: ""
        //   },
        //   () => this.drill()
        // );
        // console.log("drilled efund", response.data);
      });
  }
  // drilling through an array of objects
  // done on the front end for Emergency fund.
  // drill() {
  //   let funds = this.state.emergencyfund.map((e, i) => {
  //     return e.depositemergency !== typeof null ? e.depositemergency : null;
  //   });
  // this.setState({ funds: funds });
  // console.log(this.state.funds);
  // }

  // Add a deposit to the retirement fund.
  // Retirement fund drilling through an array of
  // objects done on the backend for practice.
  submitRetirementDeposit() {
    const { depositretirement } = this.state;
    axios
      .post("/api/addretirementdeposit", {
        user_id: this.props.profile.user.user_id,
        depositretirement
      })
      .then(response => {
        console.log(response);
        this.setState({
          alldeposits: response.data,
          depositretirement: ""
        });
      });
  }

  delButton(depositid) {
    // console.log(depositid);
    axios
      .delete(
        `/api/deletedeposit/${this.props.profile.user.user_id}/${depositid}`
      )
      .then(response => {
        this.setState({
          alldeposits: response.data
        });
      })
      .catch(error => console.log(error));
  }

  // NoGo: still updating on every key stroke
  garden = length => {
    console.log(length);
    let images = [];
    for (let i = 0; i < length; i++) {
      console.log(length);
      images.push(i);
    }
    // then map over images
    return images.map((e, i) => {
      console.log("hit");
      return (
        <div key={i}>
          <img
            // random number from 0 through 12
            src={this.state.flowers[Math.floor(Math.random() * 13)]}
            width="100px"
            height="100px"
            alt=""
          />
        </div>
      );
    });
  };

  render() {
    console.log(this.state);

    let efund = this.state.alldeposits
      .filter(e => e.depositemergency !== null)
      .map((e, i) => {
        console.log(e);
        return (
          <div key={i} className="depositlook">
            <img
              // random number from 0 through 12
              src={this.state.flowers[Math.floor(Math.random() * 13)]}
              width="50px"
              height="50px"
              alt=""
            />
            {moment(e.datecreated).format("LL")}{" "}
            <strong>{e.depositemergency}</strong>
            <button
              className="delButton"
              onClick={() => this.delButton(e.depositid)}
            >
              <strong>Remove</strong>
            </button>
          </div>
        );
      });

    const { classes } = this.props;
    return (
      <div className="nestegg">
        <Navbar />

        <div className="nestegg-header">
          <h2>Step 2: Build a Nest Egg</h2>
        </div>

        <div>
          {/* Email Card */}
          <Card className={classes.card}>
            <CardContent>
              <h2 style={{ color: "indigo" }}>Record Deposit</h2>

              <input
                type="number"
                placeholder="amount"
                value={this.state.depositemergency}
                onChange={e =>
                  this.handleInput("depositemergency", e.target.value)
                }
              />

              <Button
                style={{ marginLeft: "5%" }}
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => {
                  this.submitEmergencyDeposit();
                }}
              >
                Deposit
              </Button>
            </CardContent>
          </Card>
        </div>

        <div>
          {/* Deposit Amounts */}
          <Card className={classes.card}>
            <CardContent>
              <h2 style={{ color: "indigo" }}>Deposit History</h2>

              {efund}
            </CardContent>
          </Card>
        </div>

        <h2 className="step3" style={{ color: "white" }}>
          >>> Onto step 3: Plan your{" "}
          <Link to="/retirementplan"> retirement!</Link>
        </h2>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(withStyles(styles)(NestEgg));
