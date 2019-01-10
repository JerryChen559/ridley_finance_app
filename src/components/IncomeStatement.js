import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../redux/reducers/profileReducer";
import axios from "axios";
import "./IncomeStatement.css";

import { Doughnut } from "react-chartjs-2";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

//TODO update $ figures. toLocalString()
class IncomeStatement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salary: 0,
      federaltax: 0,
      statetax: 0,
      sideincome: 0,
      rent: 0,
      mortgage: 0,
      car: 0,
      gas: 0,
      water: 0,
      healthcare: 0,
      school: 0,
      food: 0,
      restaurants: 0,
      clothes: 0,
      gym: 0,
      entertainment: 0,
      travel: 0,
      monthlyincome: 0,
      monthlyexpenses: 0,
      monthlynetincome: 0,
      monthlynetpercent: 0,
      email: ""
    };
  }

  async componentDidMount() {
    await this.props.getUser();
    await this.getIncomeStatement();
  }

  getIncomeStatement() {
    console.log(this.props);
    axios
      .get(`/api/incomestatement/${this.props.profile.user.auth_id}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          salary: response.data[0].salary,
          federaltax: response.data[0].federaltax,
          statetax: response.data[0].statetax,
          sideincome: response.data[0].sideincome,
          rent: response.data[0].rent,
          mortgage: response.data[0].mortgage,
          car: response.data[0].car,
          gas: response.data[0].gas,
          water: response.data[0].water,
          healthcare: response.data[0].healthcare,
          school: response.data[0].school,
          food: response.data[0].food,
          restaurants: response.data[0].restaurants,
          clothes: response.data[0].clothes,
          gym: response.data[0].gym,
          entertainment: response.data[0].entertainment,
          travel: response.data[0].travel,
          monthlyexpenses: response.data[0].monthlyexpenses,
          monthlyincome: response.data[0].monthlyincome,
          monthlynetincome: response.data[0].monthlynetincome,
          monthlynetpercent: response.data[0].monthlynetpercent
        });
      });
  }

  handleInput(key, val) {
    this.setState({ [key]: val });
  }

  sendIncomeStatement() {
    axios
      .post(`/api/sendIncomeStatement/${this.props.profile.user.auth_id}`, {
        email: this.state.email,
        salary: this.state.salary,
        federaltax: this.state.federaltax,
        statetax: this.state.statetax,
        sideincome: this.state.sideincome,
        rent: this.state.rent,
        mortgage: this.state.mortgage,
        car: this.state.car,
        gas: this.state.gas,
        water: this.state.water,
        healthcare: this.state.healthcare,
        school: this.state.school,
        food: this.state.food,
        restaurants: this.state.restaurants,
        clothes: this.state.clothes,
        gym: this.state.gym,
        entertainment: this.state.entertainment,
        travel: this.state.travel,
        monthlyincome: this.state.monthlyincome,
        monthlyexpenses: this.state.monthlyexpenses,
        monthlynetincome: this.state.monthlynetincome,
        monthlynetpercent: this.state.monthlynetpercent
      })
      .then(response => console.log(response));
  }

  render() {
    console.log("IS state", this.state);
    console.log("IS props", this.props);

    // --- data for Doughnut ---
    const data = {
      labels: [
        "rent",
        "mortgage",
        "car",
        "gas",
        "water",
        "healthcare",
        "school",
        "food",
        "restaurants",
        "clothes",
        "gym",
        "entertainment",
        "travel"
      ],

      datasets: [
        {
          data: [
            this.state.rent,
            this.state.mortgage,
            this.state.car,
            this.state.gas,
            this.state.water,
            this.state.healthcare,
            this.state.school,
            this.state.food,
            this.state.restaurants,
            this.state.clothes,
            this.state.gym,
            this.state.entertainment,
            this.state.travel
          ],
          backgroundColor: [
            "#00C590",
            "#65A8C4",
            "#AACEE2",
            "#8C65D3",
            "#81CBF8",
            "#CAB9F1",
            "#0052A5",
            "#413BF7",
            "#00ADCE",
            "#59DBF1",
            "#004159",
            "#73EBAE",
            "#B5F9D3"
          ],
          hoverBackgroundColor: [
            "#00C590",
            "#65A8C4",
            "#AACEE2",
            "#8C65D3",
            "#81CBF8",
            "#CAB9F1",
            "#0052A5",
            "#413BF7",
            "#00ADCE",
            "#59DBF1",
            "#004159",
            "#73EBAE",
            "#B5F9D3"
          ]
        }
      ]
    };

    return (
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="incomestatement">
          <Sidenav />

          <div className="statement-header">
            <h1>Welcome to Step 1!</h1>
            {/* <h5>(calculate net income by updating your info)</h5> */}
          </div>

          <div className="statement-body">
            <h3 style={{ color: "khaki" }}>
              Monthly Income Statement
              <span className="update">
                <Link to="/wizardone/1">Update Info</Link>
              </span>
            </h3>

            <div className="spreadsheet">
              <div style={{ fontSize: 18, marginLeft: 100 }}>INCOME</div>
              <div>
                Salary:
                <p>{this.state.salary}</p>
              </div>
              <div>
                Federal Income Tax:
                <p>{this.state.federaltax}</p>
              </div>
              <div>
                State Income Tax:
                <p>{this.state.statetax}</p>
              </div>
              <div>
                Federal Insurance Contributions Act (FICA):
                <p>7.65</p>
              </div>
              <div>
                Side Income / Secondary Income:
                <p>{this.state.sideincome}</p>
              </div>
              <div>
                <strong>
                  Net Income:
                  <p>
                    {/* note: toLocaleString cannot be applied to null */}
                    {/* {this.state.monthlyincome.toLocaleString()} */}
                    {this.state.monthlyincome}
                  </p>
                </strong>
              </div>
              <br />
              <div style={{ fontSize: 18, marginLeft: 100 }}>EXPENSES</div>

              <div>
                Rent:
                <p>{this.state.rent}</p>
              </div>
              <div>
                Mortgage / HOA / Home Insurance:
                <p>{this.state.mortgage}</p>
              </div>
              <div>
                Car Payment / Car Insurance:
                <p>{this.state.car}</p>
              </div>
              <div>
                Gasoline / Subway pass:
                <p>{this.state.gas}</p>
              </div>
              <div>
                Water / Electricity / Heating / Internet / Cable:
                <p>{this.state.water}</p>
              </div>
              <div>
                Healthcare:
                <p>{this.state.healthcare}</p>
              </div>
              <div>
                School:
                <p>{this.state.school}</p>
              </div>
              <div>
                Food (groceries):
                <p>{this.state.food}</p>
              </div>
              <div>
                Restaurants:
                <p>{this.state.restaurants}</p>
              </div>
              <div>
                Clothes:
                <p>{this.state.clothes}</p>
              </div>
              <div>
                Gym Membership:
                <p>{this.state.gym}</p>
              </div>
              <div>
                Entertainment:
                <p>{this.state.entertainment}</p>
              </div>
              <div>
                Travel:
                <p>{this.state.travel}</p>
              </div>
              <div>
                <strong>
                  Total Expenses:
                  <p>{this.state.monthlyexpenses}</p>
                </strong>
              </div>
              <br />
              <div style={{ fontSize: 18, marginLeft: 100 }}>
                MONTHLY NET MARGIN:
                <p>{this.state.monthlynetincome}</p>
              </div>
            </div>

            <h3 style={{ marginTop: "10px" }}>
              <strong style={{ color: "khaki" }}>Summary:</strong> With all
              expenses paid, you are left with{" "}
              <strong>{(this.state.monthlynetpercent * 100).toFixed(2)}</strong>
              % of your net income.
            </h3>

            <h3 style={{ marginTop: "10px" }}>
              <strong style={{ color: "khaki" }}>Email:</strong> Send yourself a
              summary of your income statement:
              <input
                type="text"
                placeholder="email"
                onChange={e => this.handleInput("email", e.target.value)}
              />
              <button onClick={() => this.sendIncomeStatement()}>
                <strong>Email</strong>
              </button>
            </h3>
          </div>
          <div className="graph-body">
            <div>
              <h2 style={{ color: "#333" }}>Breakdown of expenses</h2>
              <Doughnut
                data={data}
                style={{ width: "auto", fontSize: "2em" }}
              />
            </div>
            <h2 className="step2" style={{ color: "#413bf7" }}>
              >>> Next step: Set up your <Link to="/nestegg"> nest egg. </Link>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(IncomeStatement);
