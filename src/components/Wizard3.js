import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateHealthCare,
  updateSchool,
  updateFood,
  updateRestaurants
} from "../redux/reducers/statementReducer";
import { getUser } from "../redux/reducers/profileReducer";
import { Link } from "react-router-dom";
import "./Wizard.css";

class Wizard3 extends Component {
  componentDidMount() {
    this.props.getUser().then(console.log(this.props));
  }

  render() {
    const {
      updateHealthCare,
      updateSchool,
      updateFood,
      updateRestaurants
    } = this.props;

    return (
      <div className="parent-div">
        {/* healthcare, school, food, restaurants */}
        <div className="vert-align">
          <p>Amounth per month you spend on healthcare.</p>
          <input
            type="number"
            placeholder="healthcare"
            // defaultValue={
            //   this.props.state.statement.healthcare ||
            //   this.props.state.profile.user.healthcare
            // }
            onChange={e => updateHealthCare(e.target.value)}
          />
          <br />
          <p>School Fees / Student Debt Payment </p>
          <input
            type="number"
            placeholder="school fees"
            // defaultValue={
            //   this.props.state.statement.school ||
            //   this.props.state.profile.user.school
            // }
            onChange={e => updateSchool(e.target.value)}
          />
          <br />
          <p>Monthly spending on groceries</p>
          <input
            type="number"
            placeholder="groceries"
            // defaultValue={
            //   this.props.state.statement.food ||
            //   this.props.state.profile.user.food
            // }
            onChange={e => updateFood(e.target.value)}
          />
          <br />
          <p>Monthly amount spent on restaurants</p>
          <input
            type="number"
            placeholder="restaurants"
            // defaultValue={
            //   this.props.state.statement.restaurants ||
            //   this.props.state.profile.user.restaurants
            // }
            onChange={e => updateRestaurants(e.target.value)}
          />
          <br />
          <div>
            <span>Form is 75% complete! </span>
            <Link to="/wizardfour">
              <button className="margin-btn"> Next </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => state;

const mapStateToProps = state => {
  //   const { healthcare, school, food, restaurants } = state;

  return {
    //     healthcare,
    //     school,
    //     food,
    //     restaurants
    state
  };
};

export default connect(
  mapStateToProps,
  { updateHealthCare, updateSchool, updateFood, updateRestaurants, getUser }
)(Wizard3);
