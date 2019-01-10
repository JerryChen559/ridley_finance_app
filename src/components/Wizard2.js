import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateRent,
  updateMortgage,
  updateCar,
  updateGas,
  updateWater
} from "../redux/reducers/statementReducer";
import { getUser } from "../redux/reducers/profileReducer";
import { Link } from "react-router-dom";
import "./Wizard.css";

class Wizard2 extends Component {
  componentDidMount() {
    this.props.getUser().then(console.log(this.props));
  }

  render() {
    console.log(this.props);
    const {
      updateRent,
      updateMortgage,
      updateCar,
      updateGas,
      updateWater
    } = this.props;

    return (
      <div className="parent-div">
        {/* rent, mortgage, car, gas, water */}
        <div className="vert-align">
          <p>Cost of rent</p>
          <input
            type="number"
            placeholder="rent"
            // defaultValue={
            //   this.props.statement.rent || this.props.profile.user.rent
            // }
            onChange={e => updateRent(e.target.value)}
          />
          <br />
          <p>Monthly mortgage / HOA / Home Insurance </p>
          <input
            type="number"
            placeholder="mortgage"
            // defaultValue={
            //   this.props.statement.mortgage || this.props.profile.user.mortgage
            // }
            onChange={e => updateMortgage(e.target.value)}
          />
          <br />
          <p>Car Payment / Car Insurance</p>
          <input
            type="number"
            placeholder="car payment"
            // defaultValue={
            //   this.props.statement.car || this.props.profile.user.car
            // }
            onChange={e => updateCar(e.target.value)}
          />
          <br />
          <p>Gasoline / Subway Pass</p>
          <input
            type="number"
            placeholder="commute"
            // defaultValue={
            //   this.props.statement.gas || this.props.profile.user.gas
            // }
            onChange={e => updateGas(e.target.value)}
          />
          <br />
          <p>Water / Electricity / Heating / Internet / Cable</p>
          <input
            type="number"
            placeholder="bills"
            // defaultValue={
            //   this.props.statement.water || this.props.profile.user.water
            // }
            onChange={e => updateWater(e.target.value)}
          />
          <div>
            <span>Form is 50% complete! </span>
            <Link to="/wizardthree">
              <button className="margin-btn"> Next </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

// const mapStateToProps = state => {
// const { rent, mortgage, car, gas, water } = state;

// return {
//   rent,
//   mortgage,
//   car,
//   gas,
//   water
//   };
// };

export default connect(
  mapStateToProps,
  {
    updateRent,
    updateMortgage,
    updateCar,
    updateGas,
    updateWater,
    getUser
  }
)(Wizard2);
