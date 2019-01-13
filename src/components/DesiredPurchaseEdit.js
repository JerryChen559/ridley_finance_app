import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./DesiredPurchaseEdit.css";

class DesiredPurchaseEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      purchasecardid: "",
      itemname: "",
      note: "",
      price: "",
      importance: "",
      redirect: false
    };
  }

  componentDidMount() {
    this.getCard();
  }

  getCard() {
    console.log(this.props);
    axios.get(`/api/card/${this.props.match.params.cardid}`).then(response => {
      console.log(response);
      this.setState({
        purchasecardid: response.data[0].purchasecardid,
        itemname: response.data[0].itemname,
        note: response.data[0].note,
        price: response.data[0].price,
        importance: response.data[0].importance
      });
    });
  }

  handleSubmit() {
    console.log(this.state.id);
    axios
      .put(`/api/card/${this.state.purchasecardid}`, {
        itemname: this.state.itemname,
        note: this.state.note,
        price: this.state.price,
        importance: this.state.importance
      })
      .then(response => {
        console.log(response);
        this.setState({
          // itemname: response.data.itemname,
          // note: response.data.note,
          // price: response.data.price,
          // importance: response.data.importance,
          redirect: !this.state.redirect
        });
      });
  }

  handleCancel() {
    this.props.history.push("/desiredpurchases");
  }

  updateTopic(key, val) {
    this.setState({ [key]: val });
  }

  render() {
    console.log("editcard state:", this.state);
    console.log("editcard props:", this.props);

    if (this.state.redirect) {
      return <Redirect to="/desiredpurchases" />;
    }

    return (
      <div className="parent-divv">
        <div className="vert-alignn">
          <div>
            <h3>Purchase Card Edit Page</h3>
            <h4>Editing Card: {this.state.itemname}</h4>
          </div>
          <div>
            <span className="input-row">
              <p>Item Name:</p>
              <input
                type="text"
                placeholder="Name of the item you want to buy"
                value={this.state.itemname}
                onChange={e => this.updateTopic("itemname", e.target.value)}
              />
            </span>
            <br />
            <span className="input-row">
              <p>Note:</p>
              <input
                type="text"
                placeholder="Make a note on why you want to buy this item"
                value={this.state.note}
                onChange={e => this.updateTopic("note", e.target.value)}
              />
            </span>
            <br />
            <span className="input-row">
              <p>Price:</p>
              <input
                type="float"
                placeholder="Enter the price of the item"
                value={this.state.price}
                onChange={e => this.updateTopic("price", e.target.value)}
              />
            </span>
            <br />
            <span className="input-row">
              <p>Level of Importance:</p>
              <input
                type="number"
                placeholder="Enter a number from 1 to 10"
                value={this.state.importance}
                onChange={e => this.updateTopic("importance", e.target.value)}
              />
            </span>
            <br />
          </div>
          <div className="align-btn">
            <button onClick={() => this.handleCancel()}>Cancel Editing</button>
            <button onClick={() => this.handleSubmit()}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => state;

export default DesiredPurchaseEdit;
