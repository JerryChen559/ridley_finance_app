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
// import Sidenav from "./Sidenav";
// import "./Sidenav.css";

//TODO: flowers are updating on input change.
// stop it from updating on every key stroke.

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
    // NoGo:
    // this.garden();
  }

  // componentDidUpdate(){
  // NoGo:
  //this.garden();
  // }

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
            {moment(e.datecreated).format("LL")}{" "}
            <strong>{e.depositemergency}</strong>
            <button
              className="delButton"
              onClick={() => this.delButton(e.depositid)}
            >
              <strong>Delete</strong>
            </button>
          </div>
        );
      });
    let rfund = this.state.alldeposits
      .filter(e => e.depositretirement !== null)
      .map((e, i) => {
        return (
          <div key={i} className="depositlook">
            {moment(e.datecreated).format("LL")}{" "}
            <strong>{e.depositretirement}</strong>
            <button
              className="delButton"
              onClick={() => this.delButton(e.depositid)}
            >
              <strong>Delete</strong>
            </button>
          </div>
        );
      });

    // NoGo:
    // let garden = (length) => {
    //     for (let i = 0; i < length; i++){
    //       return (
    //         <div key={i}>
    //           <img
    //             // random number from 0 through 12
    //             src={this.state.flowers[Math.floor(Math.random() * 13)]}
    //             width="100px"
    //             height="100px"
    //             alt=""
    //           />
    //         </div>
    //       );
    //     }
    // }

    // NoGo: Flowers from map function changes on every key stroke
    // let garden = this.state.alldeposits.map((e, i) => {
    //   return (
    //     <div key={i}>
    //       <img
    //         // random number from 0 through 12
    //         src={this.state.flowers[Math.floor(Math.random() * 13)]}
    //         width="100px"
    //         height="100px"
    //         alt=""
    //       />
    //     </div>
    //   );
    // });

    return (
      <div className="nestegg">
        {/* <div className="navbar"> */}
        <Navbar />
        {/* </div> */}
        {/* <Sidenav /> */}
        <div className="nestegg-header">
          <h1>Step 2: Build a Nest Egg</h1>
          {/* <h5>
            (Take the net income amount and distribute it across emergency funds
            and retirement)
          </h5> */}
        </div>

        <div className="nestegg-body">
          <div className="nestegg-left">
            <div className="emergencyfund">
              <h2 style={{ color: "khaki" }}>Emergency Fund</h2>
              <span>
                <input
                  type="number"
                  placeholder="amount"
                  value={this.state.depositemergency}
                  onChange={e =>
                    this.handleInput("depositemergency", e.target.value)
                  }
                />
                <button
                  className="nestegg-add"
                  onClick={() => {
                    this.submitEmergencyDeposit();
                  }}
                >
                  <strong>Add on click</strong>
                </button>
              </span>
              <h3>Deposit Amounts</h3>
              {efund}
            </div>

            <div className="retirementfund">
              <h2 style={{ color: "khaki" }}>Retirement Fund</h2>
              <span>
                <input
                  type="number"
                  placeholder="amount"
                  value={this.state.depositretirement}
                  onChange={e =>
                    this.handleInput("depositretirement", e.target.value)
                  }
                />
                <button
                  className="nestegg-add"
                  onClick={() => {
                    this.submitRetirementDeposit();
                  }}
                >
                  <strong>Add on click</strong>
                </button>
              </span>
              <h3>Deposit Amounts</h3>
              {rfund}
            </div>
          </div>
          <div className="nestegg-right">
            <p style={{ color: "khaki" }}>
              <strong>Garden of Wealth</strong>
            </p>
            <div className="garden">
              {/* {garden} */}
              {this.garden(this.state.alldeposits.length)}
            </div>
            <h3>
              >>> Onto step 3: Plan your{" "}
              <Link to="/retirementplan"> retirement!</Link>
            </h3>
          </div>
        </div>
        {/* 
        I can add this to the bottom.
        <h3>
          A nest egg is a sum of money that has been collected over time with a
          purpose of using spending it at a later date. Let's build a couple of
          nest eggs!{" "}
        </h3>
        <h3>
          We can take the net income amount from the income statement and
          distribute it across emergency funds and retirement.
        </h3> */}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(NestEgg);
