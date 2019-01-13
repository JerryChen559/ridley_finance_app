import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import Navbar from "./Navbar";
import "./DesiredPurchases.css";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  card: {
    marginTop: "2%",
    width: "46%",
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
      <div key={i}>
        <Card className={this.props.classes.card}>
          <h4 style={{ color: "indigo", float: "right", paddingRight: "3%" }}>
            <strong>#{card.importance}</strong>
          </h4>
          <CardContent>
            <h3
              style={{
                color: "indigo",
                marginTop: "0px",
                marginBottom: "0px"
              }}
            >
              Item: {card.itemname}
            </h3>
            <Typography
              className={this.props.classes.pos}
              color="textSecondary"
            >
              Note: {card.note}
            </Typography>
            <Typography component="p">Price: {card.price}</Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link
                to={{
                  pathname: `/desiredPurchase/${card.purchasecardid}`
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={this.props.classes.button}
                  onClick={() => {}}
                >
                  <strong>Update</strong>
                </Button>
              </Link>

              <button
                className="delButton"
                onClick={() => this.delButton(card.purchasecardid)}
              >
                <strong>Remove</strong>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    ));
    // .sort((a, b) => a.importance - b.importance);

    return (
      <div>
        <Navbar />
        <div className="desiredpurchases">
          {/* header */}
          <h2 className="retire-header">Step 4: Desired Purchases</h2>
          <div className="instructions">
            <span className="leftside">
              <p>
                <strong style={{ color: "yellow" }}>Directions: </strong>Make a
                list of all the things you want to purchase.
              </p>
              <p>Managing your expenses can lead to conscious spending.</p>
            </span>
            {/* add card */}
            <span className="rightside">
              <button className="addcardbtn" onClick={() => this.addCard()}>
                add new card
              </button>
            </span>
          </div>

          {orderedCards}

          {/* next step */}
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

export default connect(mapStateToProps)(withStyles(styles)(DesiredPurchases));
