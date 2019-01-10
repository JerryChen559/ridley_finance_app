import React, { Component } from "react";
import { Link } from "react-router-dom";

import Sidenav from "./Sidenav";
import "./Sidenav.css";

// import DesiredPurchaseEdit from "./DesiredPurchaseEdit";
import Card from "./CardDND";
import "./DesiredPurchases.css";
const update = require("immutability-helper");

export class DesiredPurchasesDND extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        { id: 1, text: "camera" },
        { id: 2, text: "book" },
        { id: 3, text: "phone" },
        { id: 4, text: "laptop" }
      ]
    };
  }

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        }
      })
    );
  };

  render() {
    // console.log(this.state);
    // let listOfCards = this.state.cards.map((card, i) => {
    //   return (
    //     <Card
    //       key={card.id}
    //       index={i}
    //       id={card.id}
    //       text={card.text}
    //       moveCard={this.moveCard}
    //     />
    //   );
    // });

    return (
      <div>
        <Sidenav />
        <div>
          <h1>Welcome to Step 4:</h1>
          <h3>Make a list of all the things you want to purchase.</h3>
          <h3>This is feature of the app should help manage spending.</h3>

          <button>add</button>
          <h3>
            <Link to="/">home</Link>.
          </h3>
        </div>
        <div className="card-container">
          {this.state.cards.map((card, i) => (
            <Card
              key={card.id}
              index={i}
              id={card.id}
              text={card.text}
              moveCard={this.moveCard}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DesiredPurchasesDND;
