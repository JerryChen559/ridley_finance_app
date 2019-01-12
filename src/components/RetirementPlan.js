import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import "./RetirementPlan.css";

import { Bar, Line } from "react-chartjs-2";
import Navbar from "./Navbar";
// import Sidenav from "./Sidenav";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    marginTop: "10px",
    width: "60%",
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

class RetirementPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: "",
      asset: "",
      totalAssetsFiveYears: 0,
      fire: 0,
      monthcount: 0,
      yearcount: 0,
      // pass in using redux props
      monthlyexpenses: 0,
      monthlyincome: 0,
      monthlynetincome: 0,
      monthlynetpercent: 0
    };
  }

  componentDidMount() {
    this.getIncomeStatement();
  }
  getIncomeStatement() {
    console.log(this.props);
    axios
      .get(`/api/incomestatement/${this.props.profile.user.auth_id}`)
      .then(response => {
        console.log("getuser", response.data);
        this.setState({
          monthlyexpenses: response.data[0].monthlyexpenses,
          monthlyincome: response.data[0].monthlyincome,
          monthlynetincome: response.data[0].monthlynetincome,
          monthlynetpercent: response.data[0].monthlynetpercent
        });
      });
  }

  // I might have to get this.props to store onto local state, so that I can work with the data.
  //componentDidUpdate(){}?

  changeAge(val) {
    this.setState({ age: val });
  }
  changeAsset(val) {
    this.setState({ asset: val });
  }

  render() {
    // console.log("RP state:", this.state);
    // console.log("RP props:", this.props);

    // MATH for FIRE: (Monthly expenses * 12 months * ({yearsleft})) * (1.02**({yearsleft}))
    let yearsleft = 78 - this.state.age;
    let fire =
      (1 - this.state.monthlynetpercent) *
        this.state.monthlyincome *
        12 *
        yearsleft >
      0
        ? (1 - this.state.monthlynetpercent) *
          this.state.monthlyincome *
          12 *
          yearsleft
        : 0;
    //  *1.02 ** yearsleft;

    // monthly net percent
    // monthlynetpercent = monthlynetincome/monthlyincome

    // monthly net income = monthly income - monthly expenses
    // Alternatively written for this page:
    // monthlynetincome = monthlynetpercent * monthlyincome

    // Removed
    // MATH for MONTHS of WORK LEFT:
    // monthcount = (fire - total assets) / monthlynetincome
    // let monthcount = Math.floor(
    //   (fire - this.state.asset) /
    //     (this.state.monthlynetpercent * this.state.monthlyincome*12)
    // );

    // MATH for YEARS of WORK LEFT:
    // yearcount = monthcount / 12
    // let yearcount =
    // Math.sqrt(
    //   Math.log10(
    // (fire - this.state.asset) -
    // (this.state.monthlynetpercent * this.state.monthlyincome * 12);
    // ) / Math.log10(1.02)
    // );

    ////-----------
    let assetyears = (this.state.asset / fire) * yearsleft;
    let savings =
      this.state.monthlynetpercent * this.state.monthlyincome * 12 * yearsleft;
    let savingsyears =
      (savings / (this.state.monthlyincome * 12 * yearsleft)) * yearsleft;

    let yearcount =
      yearsleft - assetyears - savingsyears > 0
        ? yearsleft - assetyears - savingsyears
        : 0;
    ////--------

    // --- math for Bar Graph ---
    // MATH for TOTAL ASSETS in 5 year plan:
    // totalAssets = assets + monthlynetincome * 60 months * (1.02^5)
    let totalAssetsFiveYears =
      (this.state.monthlynetpercent * this.state.monthlyincome * 60 +
        +this.state.asset) *
      1.104;

    // --- data for Bar Graph ---
    const data_bar = {
      labels: ["Five Year Projection" /*, "2nd data set"*/],
      datasets: [
        {
          label: "FIRE/Goal",
          backgroundColor: "rgba(255,99,132,0.6)",
          borderColor: "rgba(255, 20, 147,0.9)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.8)",
          hoverBorderColor: "rgba(255, 20, 147,1)",
          //data: [this.state.fire /*, this.state.seconddataset*/]
          data: [fire]
        },
        {
          label: "Assets/Savings",
          backgroundColor: "rgba(123, 104, 238,0.6)",
          borderColor: "rgba(0, 0, 205,0.9)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(123, 104, 238,0.8)",
          hoverBorderColor: "rgba(0, 0, 205,1)",
          data: [totalAssetsFiveYears]
        }
      ]
    };

    // --- math for Line Graph ---
    // FV = PV * (1+r)^n
    // interest rate of 2%

    console.log("asset:", this.state.asset);
    console.log("monthly net %:", this.state.monthlynetpercent);
    console.log("monthly income:", this.state.monthlyincome);
    // console.log("fire:", fire);
    let PV = +this.state.asset;

    let FV1 =
      (this.state.monthlynetpercent * this.state.monthlyincome * 12 +
        +this.state.asset) *
      1.02;
    let FV2 =
      (this.state.monthlynetpercent * this.state.monthlyincome * 24 +
        +this.state.asset) *
      1.04;
    let FV3 =
      (this.state.monthlynetpercent * this.state.monthlyincome * 36 +
        +this.state.asset) *
      1.061;
    let FV4 =
      (this.state.monthlynetpercent * this.state.monthlyincome * 48 +
        +this.state.asset) *
      1.082;
    let FV5 =
      (this.state.monthlynetpercent * this.state.monthlyincome * 60 +
        +this.state.asset) *
      1.104;

    // --- data for Line Graph ---
    const data_line = {
      labels: ["Now", "Year1", "Year2", "Year3", "Year4", "Year5"],
      datasets: [
        {
          label: "Savings Rate vs Time",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(123, 104, 238,0.4)",
          borderColor: "rgba(123, 104, 238,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(123, 104, 238,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(123, 104, 238,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [PV, FV1, FV2, FV3, FV4, FV5]
        }
      ]
    };

    const { classes } = this.props;
    return (
      <div className="retire">
        <Navbar />

        <div className="retire-header">
          <h2>Step 3: Retirement Plan</h2>
        </div>

        <div className="retire-inputs">
          {/* card for Retire Amoumt */}
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Calculate your (FIRE) retirement amount
              </Typography>

              <h2 style={{ color: "indigo", marginBottom: "0px" }}>
                Financial Independence Retire Early{" "}
              </h2>
              <Typography className={classes.pos} color="textSecondary">
                This number represents how much you need in the bank to go the
                rest of your life without any additional income.
              </Typography>
              <Typography component="p">
                Please input your age{" "}
                <input
                  style={{ width: "30px", marginLeft: "0" }}
                  value={this.state.age}
                  placeholder="age"
                  onChange={e => this.changeAge(e.target.value)}
                />
              </Typography>
              <Typography component="p">
                Your number to be financially free is: {fire.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>

          {/* card for Work Years Left */}
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Track your valuation and calculate remaining work years
              </Typography>

              <h2 style={{ color: "indigo", marginBottom: "0px" }}>
                Current Assets
              </h2>
              <Typography className={classes.pos} color="textSecondary">
                Assets have value and accumulates income (stocks, rare metals,
                property, business)
              </Typography>
              <Typography component="p">
                Please input your your total valuation{" "}
                <input
                  style={{ width: "80px", marginLeft: "0" }}
                  value={this.state.asset}
                  placeholder="total assets"
                  onChange={e => this.changeAsset(e.target.value)}
                />
              </Typography>
              <Typography component="p">
                Your current savings percent:{" "}
                {(this.state.monthlynetpercent * 100).toFixed(2)}%
              </Typography>
              <Typography component="p">
                Number of working YEARS until you are financially free:{" "}
                {yearcount.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* Slider */}
        <div className="range-field">
          <span style={{ color: "khaki" }}>
            <strong>Savings of Net Income:</strong>{" "}
          </span>
          <span>
            <input
              type="range"
              name="slider"
              min="20"
              max="70"
              defaultValue="20"
              onChange={e =>
                this.setState({
                  monthlynetpercent: e.target.value / 100
                })
              }
            />
          </span>
          <span className="slider-num">
            <span>20%</span>
            <span>30%</span>
            <span>40%</span>
            <span>50%</span>
            <span>60%</span>
            <span>70%</span>
          </span>
        </div>

        <div className="retire-charts">
          {/* --- <BarGraph /> --- */}
          <div className="bar-chart-container" style={{ width: "49%" }}>
            {/* <h2>Bar Example (custom size)</h2> */}
            <h4 style={{ color: "#333" }}>Five Year Projection</h4>

            <h6 style={{ color: "#333" }}>
              *Financially free when the bar graphs equal
            </h6>
            <Bar
              style={{ display: "block" }}
              data={data_bar}
              // width={30}
              // height={10}
              // options={{
              //   maintainAspectRatio: false
              // }}
            />
          </div>

          {/* --- <LineGraph /> --- */}
          <div className="line-graph-container" style={{ width: "49%" }}>
            <h4 style={{ color: "#333" }}>
              Rate of savings to Time until retirement{" "}
            </h4>
            <Line data={data_line} />
          </div>
        </div>

        <h2 className="step3" style={{ color: "aliceblue" }}>
          >>> Onto step 4, the bonus section: Rank your future
          <Link to="/retirementplan"> purchases!</Link>
        </h2>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(withStyles(styles)(RetirementPlan));
