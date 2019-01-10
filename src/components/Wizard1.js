import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateSalary,
  updateFederalTax,
  updateStateTax,
  updateSideIncome
} from "../redux/reducers/statementReducer";
import { getUser } from "../redux/reducers/profileReducer";
import { Link } from "react-router-dom";
import "./Wizard.css";

class Wizard1 extends Component {
  componentDidMount() {
    this.props.getUser().then(response => {
      console.log(response);
    });
  }

  /*
  getIncomeStatement = () => {
    console.log(this.props);
    axios
      .get(
        `http://localhost:4000/api/incomestatement/${
          this.props.match.params.id
        }`
      )
      // should also work!
      // .get(`http://localhost:4000/api/house/${this.props.location.state.id}`)
      .then(response => {
        console.log(response);
        this.setState({
          auth_id: response.data[0].id,
          salary: response.data[0].salary,
          federaltax: response.data[0].federaltax,
          statetax: response.data[0].statetax,
          sideincome: response.data[0].sideincome
        });
      });
  };
  */

  /*
  handleSubmit() {
    console.log(this.props.profile.user.auth_id);
    axios.put(`/api/incomestatement/${this.props.user.auth_id}`, {
      salary: this.state.salary,
      federaltax: this.state.federaltax,
      statetax: this.state.statetax,
      sideincome: this.state.sideincome
    }); */
  // .then(response => {
  //   console.log(response);
  //   this.setState({
  //     salary: this.state.salary,
  //     federaltax: this.state.federaltax,
  //     statetax: this.state.statetax,
  //     sideincome: this.state.sideincome
  //     // redirect: !this.state.redirect
  //   });
  // });
  // }

  render() {
    console.log(this.props);
    console.log(this.props.state.profile.user.salary);
    console.log(this.props.state.statement.salary);
    console.log(this.state);

    const {
      updateSalary,
      updateFederalTax,
      updateStateTax,
      updateSideIncome
    } = this.props;

    return (
      <div className="parent-div">
        {/* salary, fed, state, FICA, secondary income */}
        <div className="vert-align">
          <p>Monthly salary before taxes.</p>
          {console.log(this.props.state.statement.salary)}
          <input
            type="number"
            placeholder={"salary"}
            // defaultValue={for update btn after having gone thru update once in current session || for update btn on initial log in}
            // defaultValue={
            //   this.props.state.statement.salary ||
            //   this.props.state.profile.user.salary
            // }
            onChange={e => updateSalary(e.target.value)}
          />
          <br />
          <p>
            {/* Todo: make this a dropdown.  */}
            Federal Income Tax (10%, 15%, 25%, 28%, 33%, 35%, 39.6%)
          </p>
          <input
            type="number"
            placeholder="federal income tax (in %)"
            // defaultValue={
            //   this.props.state.statement.federaltax ||
            //   this.props.state.profile.user.federaltax
            // }
            onChange={e => updateFederalTax(e.target.value)}
          />
          <br />
          <p>
            {/* Todo: make this a dropdown. tax rate autofills when a state is selected */}
            State Income Tax
          </p>
          <input
            type="number"
            placeholder="percentage as decimal"
            // defaultValue={
            //   this.props.state.statement.statetax ||
            //   this.props.state.profile.user.statetax
            // }
            onChange={e => updateStateTax(e.target.value)}
          />
          <br />
          <p>
            Federal Insurance Contributions Act (FICA) (6.2% Social Security tax
            + 1.45% Medicare tax)
          </p>
          <input
            // no edit = no onchange
            value="7.65"
          />
          <br />
          <p>Side Income / Secondary Income </p>
          <input
            type="number"
            placeholder="side income"
            // defaultValue={
            //   this.props.state.statement.sideincome ||
            //   this.props.state.profile.user.sideincome
            // }
            onChange={e => updateSideIncome(e.target.value)}
          />
          <div>
            <span>Form is 25% complete! </span>
            <Link to="/wizardtwo">
              <button className="margin-btn">Next</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  // const { salary, federaltax, statetax, sideincome } = state;

  return {
    // salary,
    // federaltax,
    // statetax,
    // sideincome
    state
  };
};

export default connect(
  mapStateToProps,
  {
    updateSalary,
    updateFederalTax,
    updateStateTax,
    updateSideIncome,
    getUser
  }
)(Wizard1);
