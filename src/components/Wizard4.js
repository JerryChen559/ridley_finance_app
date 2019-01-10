import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateClothes,
  updateGym,
  updateEntertainment,
  updateTravel
} from "../redux/reducers/statementReducer";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Wizard.css";

class Wizard4 extends Component {
  handleSubmit() {
    console.log(this.props.profile);
    axios
      .put(`/api/incomestatement/${this.props.profile.user.auth_id}`, {
        salary: this.props.statement.salary,
        federaltax: this.props.statement.federaltax,
        statetax: this.props.statement.statetax,
        sideincome: this.props.statement.sideincome,
        rent: this.props.statement.rent,
        mortgage: this.props.statement.mortgage,
        car: this.props.statement.car,
        gas: this.props.statement.gas,
        water: this.props.statement.water,
        healthcare: this.props.statement.healthcare,
        school: this.props.statement.school,
        food: this.props.statement.food,
        restaurants: this.props.statement.restaurants,
        clothes: this.props.statement.clothes,
        gym: this.props.statement.gym,
        entertainment: this.props.statement.entertainment,
        travel: this.props.statement.travel,
        monthlyexpenses:
          // monthlyexpenses: all expenses added up
          +(
            this.props.statement.rent * 1 +
            this.props.statement.mortgage * 1 +
            this.props.statement.car * 1 +
            this.props.statement.gas * 1 +
            this.props.statement.water * 1 +
            this.props.statement.healthcare * 1 +
            this.props.statement.school * 1 +
            this.props.statement.food * 1 +
            this.props.statement.restaurants * 1 +
            this.props.statement.clothes * 1 +
            this.props.statement.gym * 1 +
            this.props.statement.entertainment * 1 +
            this.props.statement.travel * 1
          ),
        monthlyincome:
          // monthlyincome: salary-governmentfees+sideincome
          +(
            this.props.statement.salary * 1 -
            this.props.statement.salary *
              (this.props.statement.federaltax / 100) -
            this.props.statement.salary *
              (this.props.statement.statetax / 100) -
            this.props.statement.salary * 0.0765 +
            this.props.statement.sideincome * 1
          ),
        monthlynetincome:
          // monthlynetincome: monthlyincome - monthlyexpenses
          +(
            this.props.statement.salary * 1 -
            this.props.statement.salary *
              (this.props.statement.federaltax / 100) -
            this.props.statement.salary *
              (this.props.statement.statetax / 100) -
            this.props.statement.salary * 0.0765 +
            this.props.statement.sideincome * 1
          ) -
          +(
            this.props.statement.rent * 1 +
            this.props.statement.mortgage * 1 +
            this.props.statement.car * 1 +
            this.props.statement.gas * 1 +
            this.props.statement.water * 1 +
            this.props.statement.healthcare * 1 +
            this.props.statement.school * 1 +
            this.props.statement.food * 1 +
            this.props.statement.restaurants * 1 +
            this.props.statement.clothes * 1 +
            this.props.statement.gym * 1 +
            this.props.statement.entertainment * 1 +
            this.props.statement.travel * 1
          ),
        monthlynetpercent:
          //monthlynetpercent: monthlynetincome / monthlyincome
          (+(
            this.props.statement.salary * 1 -
            this.props.statement.salary *
              (this.props.statement.federaltax / 100) -
            this.props.statement.salary *
              (this.props.statement.statetax / 100) -
            this.props.statement.salary * 0.0765 +
            this.props.statement.sideincome * 1
          ) -
            +(
              this.props.statement.rent * 1 +
              this.props.statement.mortgage * 1 +
              this.props.statement.car * 1 +
              this.props.statement.gas * 1 +
              this.props.statement.water * 1 +
              this.props.statement.healthcare * 1 +
              this.props.statement.school * 1 +
              this.props.statement.food * 1 +
              this.props.statement.restaurants * 1 +
              this.props.statement.clothes * 1 +
              this.props.statement.gym * 1 +
              this.props.statement.entertainment * 1 +
              this.props.statement.travel * 1
            )) /
          +(
            this.props.statement.salary * 1 -
            this.props.statement.salary *
              (this.props.statement.federaltax / 100) -
            this.props.statement.salary *
              (this.props.statement.statetax / 100) -
            this.props.statement.salary * 0.0765 +
            this.props.statement.sideincome * 1
          )
      })
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

  render() {
    console.log(this.props);

    const {
      updateClothes,
      updateGym,
      updateEntertainment,
      updateTravel
    } = this.props;

    return (
      <div className="parent-div">
        {/* clothes, gym, entertainment, travel */}
        <div className="vert-align">
          <p>Business clothes / shoes</p>
          <input
            type="number"
            placeholder="clothes"
            // defaultValue={this.props.statement.clothes}
            onChange={e => updateClothes(e.target.value)}
          />
          <br />
          <p>Gym membership</p>
          <input
            type="number"
            placeholder="gym fee"
            // defaultValue={this.props.statement.gym}
            onChange={e => updateGym(e.target.value)}
          />
          <br />
          <p>Entertainment / Movies / Concerts</p>
          <input
            type="number"
            placeholder="entertainment"
            // defaultValue={this.props.statement.entertainment}
            onChange={e => updateEntertainment(e.target.value)}
          />
          <br />
          <p>Travel costs broken up monthly (rough estimate)</p>
          <input
            type="number"
            placeholder="travel"
            // defaultValue={this.props.statement.travel}
            onChange={e => updateTravel(e.target.value)}
          />
          <div>
            <span>Form is 100% complete! </span>
            <Link to="/incomestatement">
              <button
                onClick={() => this.handleSubmit()}
                className="margin-btn"
              >
                Done
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// bringing in clothes, gym, entertainment, travel from statement
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateClothes, updateGym, updateEntertainment, updateTravel }
)(Wizard4);
