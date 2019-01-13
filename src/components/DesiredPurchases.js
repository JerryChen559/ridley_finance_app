import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import Navbar from "./Navbar";
import "./DesiredPurchases.css";

class DesiredPurchases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.getAllCards();
  }

  // get all cards by user id
  // set state so that it can be displayed across the page
  getAllCards() {
    axios
      .get(`/api/cards/${this.props.profile.user.user_id}`)
      .then(response => {
        console.log("getAllCards:", response.data);
        this.setState({ cards: response.data });
      });
  }

  // add an empty card
  addCard() {
    axios
      .post(`/api/card/${this.props.profile.user.user_id}`)
      .then(response => {
        console.log(response.data);
        this.setState({ cards: response.data });
      });
  }

  delButton(cardid) {
    axios
      .delete(`/api/card/${this.props.profile.user.user_id}/${cardid}`)
      .then(response => {
        console.log(response.data);
        this.setState({ cards: response.data });
      });
  }

  render() {
    // console.log("cardstate", this.state);
    // console.log("cardprops", this.props);

    let orderedCards = this.state.cards.map((card, i) => (
      <div className="card" key={i}>
        <span className="cardtitle">
          <span>Item: {card.itemname}</span>
          <span>Price: {card.price}</span>
          <span>
            <strong style={{ float: "right", color: "yellow" }}>
              #{card.importance}
            </strong>
          </span>
        </span>
        <span>
          <Link
            to={{
              pathname: `/desiredPurchase/${card.purchasecardid}`
              // Only need to pass in a state with the item's id
              // if I need it in the editing page.
              // Should be available on this.props.match.params.purchasecardid
              // state: { purchasecardid: card.purchasecardid }
            }}
          >
            <button className="updateButton">
              <strong>Update</strong>
            </button>
          </Link>
          <button
            className="delCardBtn"
            onClick={() => this.delButton(card.purchasecardid)}
          >
            <strong>Delete</strong>
          </button>
        </span>
      </div>
    ));
    // .sort((a, b) => a.importance - b.importance);

    return (
      <div>
        <Navbar />
        <div className="desiredpurchases">
          <h2 className="retire-header">Step 4: Desired Purchases</h2>
          <div className="instructions">
            <span className="leftside">
              <p>
                <strong style={{ color: "yellow" }}>Directions: </strong>Make a
                list of all the things you want to purchase.
              </p>
              <p>Managing your expenses can lead to conscious spending.</p>
            </span>
            <span className="rightside">
              <button className="addcardbtn" onClick={() => this.addCard()}>
                add new card
              </button>
            </span>
          </div>
          <div className="cardcontainer">{orderedCards}</div>

          <h2 className="step3" style={{ color: "aliceblue" }}>
            >>> You're done! Go
            <Link to="/incomestatement"> home!</Link>
          </h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(DesiredPurchases);
