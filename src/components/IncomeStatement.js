import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../redux/reducers/profileReducer";
import axios from "axios";
import "./IncomeStatement.css";

import { Doughnut } from "react-chartjs-2";
import Navbar from "./Navbar";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Modal from "@material-ui/core/Modal";
// import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  paper: {
    position: "absolute",
    // width: theme.spacing.unit * 50,
    width: "70%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
    // this adds scroll to edit form
    marginTop: "1%",
    height: "70%",
    overflow: "auto"
  },
  card: {
    marginTop: "10px",
    width: "44%"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "120px"
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

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
      email: "",
      open: false,
      salary_edit: 0,
      federaltax_edit: 0,
      statetax_edit: 0,
      sideincome_edit: 0,
      rent_edit: 0,
      mortgage_edit: 0,
      car_edit: 0,
      gas_edit: 0,
      water_edit: 0,
      healthcare_edit: 0,
      school_edit: 0,
      food_edit: 0,
      restaurants_edit: 0,
      clothes_edit: 0,
      gym_edit: 0,
      entertainment_edit: 0,
      travel_edit: 0
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
          monthlynetpercent: response.data[0].monthlynetpercent,
          salary_edit: response.data[0].salary,
          federaltax_edit: response.data[0].federaltax,
          statetax_edit: response.data[0].statetax,
          sideincome_edit: response.data[0].sideincome,
          rent_edit: response.data[0].rent,
          mortgage_edit: response.data[0].mortgage,
          car_edit: response.data[0].car,
          gas_edit: response.data[0].gas,
          water_edit: response.data[0].water,
          healthcare_edit: response.data[0].healthcare,
          school_edit: response.data[0].school,
          food_edit: response.data[0].food,
          restaurants_edit: response.data[0].restaurants,
          clothes_edit: response.data[0].clothes,
          gym_edit: response.data[0].gym,
          entertainment_edit: response.data[0].entertainment,
          travel_edit: response.data[0].travel
        });
      });
  }

  handleInput(key, val) {
    this.setState({ [key]: val });
  }

  // alt method to handle changes
  // handleChange = input => e => {
  //   this.setState({[input]: e.target.value})
  // }

  // for update form
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  cancelChanges() {
    this.setState({
      salary_edit: this.state.salary,
      federaltax_edit: this.state.federaltax,
      statetax_edit: this.state.statetax,
      sideincome_edit: this.state.sideincome,
      rent_edit: this.state.rent,
      mortgage_edit: this.state.mortgage,
      car_edit: this.state.car,
      gas_edit: this.state.gas,
      water_edit: this.state.water,
      healthcare_edit: this.state.healthcare,
      school_edit: this.state.school,
      food_edit: this.state.food,
      restaurants_edit: this.state.restaurants,
      clothes_edit: this.state.clothes,
      gym_edit: this.state.gym,
      entertainment_edit: this.state.entertainment,
      travel_edit: this.state.travel,
      open: false
    });
  }

  saveChanges() {
    // console.log(this.props.profile);
    axios
      .put(`/api/incomestatement/${this.props.profile.user.auth_id}`, {
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
        monthlyexpenses:
          // monthlyexpenses: all expenses added up
          +(
            this.state.rent * 1 +
            this.state.mortgage * 1 +
            this.state.car * 1 +
            this.state.gas * 1 +
            this.state.water * 1 +
            this.state.healthcare * 1 +
            this.state.school * 1 +
            this.state.food * 1 +
            this.state.restaurants * 1 +
            this.state.clothes * 1 +
            this.state.gym * 1 +
            this.state.entertainment * 1 +
            this.state.travel * 1
          ),
        monthlyincome:
          // monthlyincome: salary-governmentfees+sideincome
          +(
            this.state.salary * 1 -
            this.state.salary * (this.state.federaltax / 100) -
            this.state.salary * (this.state.statetax / 100) -
            this.state.salary * 0.0765 +
            this.state.sideincome * 1
          ),
        monthlynetincome:
          // monthlynetincome: monthlyincome - monthlyexpenses
          +(
            this.state.salary * 1 -
            this.state.salary * (this.state.federaltax / 100) -
            this.state.salary * (this.state.statetax / 100) -
            this.state.salary * 0.0765 +
            this.state.sideincome * 1
          ) -
          +(
            this.state.rent * 1 +
            this.state.mortgage * 1 +
            this.state.car * 1 +
            this.state.gas * 1 +
            this.state.water * 1 +
            this.state.healthcare * 1 +
            this.state.school * 1 +
            this.state.food * 1 +
            this.state.restaurants * 1 +
            this.state.clothes * 1 +
            this.state.gym * 1 +
            this.state.entertainment * 1 +
            this.state.travel * 1
          ),
        monthlynetpercent:
          //monthlynetpercent: monthlynetincome / monthlyincome
          (+(
            this.state.salary * 1 -
            this.state.salary * (this.state.federaltax / 100) -
            this.state.salary * (this.state.statetax / 100) -
            this.state.salary * 0.0765 +
            this.state.sideincome * 1
          ) -
            +(
              this.state.rent * 1 +
              this.state.mortgage * 1 +
              this.state.car * 1 +
              this.state.gas * 1 +
              this.state.water * 1 +
              this.state.healthcare * 1 +
              this.state.school * 1 +
              this.state.food * 1 +
              this.state.restaurants * 1 +
              this.state.clothes * 1 +
              this.state.gym * 1 +
              this.state.entertainment * 1 +
              this.state.travel * 1
            )) /
          +(
            this.state.salary * 1 -
            this.state.salary * (this.state.federaltax / 100) -
            this.state.salary * (this.state.statetax / 100) -
            this.state.salary * 0.0765 +
            this.state.sideincome * 1
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
          monthlynetpercent: response.data[0].monthlynetpercent,
          open: false
        });
      });
  }

  // NodeMailer
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

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    // console.log("IS state", this.state);
    // console.log("IS props", this.props);

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

    const { classes } = this.props;
    return (
      <div>
        <Navbar />
        <div className="incomestatement">
          <div className="statement-header">
            <h2>Step 1: Fill Out Income Statement</h2>
          </div>

          <div className="statement-body">
            {/* Redux Wizards - updated to use Modal in Material UI */}
            {/* <span className="update">
              <Link to="/wizardone/1">Update Info</Link>
            </span> */}

            <span className="spreadsheetTitle">
              <h2 style={{ color: "khaki" }}>Monthly Income Statement</h2>
              <button
                style={{ marginTop: "30px" }}
                className="addcardbtn"
                onClick={() => this.handleOpen()}
              >
                UPDATE
              </button>
              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
              >
                <div className={classes.paper}>
                  <div style={{ color: "indigo", textAlign: "center" }}>
                    <h2>Update Income Statement</h2>
                  </div>

                  {/* Update form */}
                  <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                  >
                    {/* Salary - edit */}
                    <TextField
                      id="filled-number"
                      label="Monthly Wage"
                      value={this.state.salary}
                      onChange={this.handleChange("salary")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="filled"
                    />

                    {/* Federal Tax - edit */}
                    <TextField
                      id="filled-number"
                      label="Federal Tax (%)"
                      value={this.state.federaltax}
                      onChange={this.handleChange("federaltax")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      helperText="Number taken as percentage"
                      margin="normal"
                      variant="filled"
                    />

                    {/* State Tax - edit */}
                    <TextField
                      id="filled-number"
                      label="State Tax (%)"
                      value={this.state.statetax}
                      onChange={this.handleChange("statetax")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      helperText="Number taken as percentage"
                      margin="normal"
                      variant="filled"
                    />

                    {/* Side Income - edit */}
                    <TextField
                      id="filled-number"
                      label="Side Income"
                      value={this.state.sideincome}
                      onChange={this.handleChange("sideincome")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="filled"
                    />

                    {/* Rent - edit */}
                    <TextField
                      id="filled-number"
                      label="Rent"
                      value={this.state.rent}
                      onChange={this.handleChange("rent")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="filled"
                    />

                    {/* Mortgage - edit */}
                    <TextField
                      id="filled-number"
                      label="Mortgage"
                      value={this.state.mortgage}
                      onChange={this.handleChange("mortgage")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="filled"
                    />

                    {/* Car - edit */}
                    <TextField
                      id="filled-number"
                      label="Car"
                      value={this.state.car}
                      onChange={this.handleChange("car")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="filled"
                    />

                    {/* Gas - edit */}
                    <TextField
                      id="filled-number"
                      label="Gas"
                      value={this.state.gas}
                      onChange={this.handleChange("gas")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="filled"
                    />

                    {/* Water - edit */}
                    <TextField
                      id="filled-number"
                      label="Water"
                      value={this.state.water}
                      onChange={this.handleChange("water")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="filled"
                    />

                    {/* Healthcare - edit */}
                    <TextField
                      id="filled-number"
                      label="Healthcare"
                      value={this.state.healthcare}
                      onChange={this.handleChange("healthcare")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="filled"
                    />

                    {/* School - edit */}
                    <TextField
                      id="filled-number"
                      label="School"
                      value={this.state.school}
                      onChange={this.handleChange("school")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="filled"
                    />

                    {/* Food - edit */}
                    <TextField
                      id="filled-number"
                      label="Food"
                      value={this.state.food}
                      onChange={this.handleChange("food")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="filled"
                    />

                    {/* Restaurants - edit */}
                    <TextField
                      id="filled-number"
                      label="Restaurants"
                      value={this.state.restaurants}
                      onChange={this.handleChange("restaurants")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="filled"
                    />

                    {/* Clothes - edit */}
                    <TextField
                      id="filled-number"
                      label="Clothes"
                      value={this.state.clothes}
                      onChange={this.handleChange("clothes")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="filled"
                    />

                    {/* Gym - edit */}
                    <TextField
                      id="filled-number"
                      label="Gym"
                      value={this.state.gym}
                      onChange={this.handleChange("gym")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="filled"
                    />

                    {/* Entertainment - edit */}
                    <TextField
                      id="filled-number"
                      label="Entertainment"
                      value={this.state.entertainment}
                      onChange={this.handleChange("entertainment")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="filled"
                    />

                    {/* Travel - edit */}
                    <TextField
                      id="filled-number"
                      label="Travel"
                      value={this.state.travel}
                      onChange={this.handleChange("travel")}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="filled"
                    />
                  </form>

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        marginRight: "10px"
                      }}
                      onClick={() => this.cancelChanges()}
                    >
                      <strong> Cancel</strong>
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "indigo",
                        color: "white",
                        marginLeft: "10px"
                      }}
                      onClick={() => this.saveChanges()}
                    >
                      <strong>Submit</strong>
                    </Button>
                  </div>
                </div>
              </Modal>
            </span>

            <div className="spreadsheet">
              <div style={{ fontSize: 18, marginLeft: 100 }}>INCOME</div>
              <div>
                Monthly Wage:
                <p>{this.state.salary}</p>
              </div>
              <div>
                Federal Income Tax:
                <p>{this.state.federaltax}%</p>
              </div>
              <div>
                State Income Tax:
                <p>{this.state.statetax}%</p>
              </div>
              <div>
                Federal Insurance Contributions Act (FICA):
                <p>7.65%</p>
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
          </div>

          <div className="cards">
            {/* Summary Card */}
            <Card className={classes.card}>
              <CardContent>
                <h2 style={{ color: "indigo" }}>Summary</h2>

                <Typography component="p">
                  <h3>
                    With all expenses paid, you are left with{" "}
                    <strong style={{ color: "orange" }}>
                      {(this.state.monthlynetpercent * 100).toFixed(2)}%
                    </strong>{" "}
                    of your net income.
                  </h3>
                </Typography>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className={classes.card}>
              <CardContent>
                <h2 style={{ color: "indigo" }}>Email</h2>

                <Typography component="p">
                  <h3>Send yourself a summary of your income statement.</h3>
                </Typography>

                <input
                  style={{ margin: "0px" }}
                  type="text"
                  placeholder="email"
                  onChange={e => this.handleInput("email", e.target.value)}
                />

                <Button
                  style={{ marginLeft: "5%" }}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={() => this.sendIncomeStatement()}
                >
                  <strong>Send</strong>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="graph-body">
            <div>
              <h2 style={{ color: "indigo", textAlign: "center" }}>
                Breakdown of expenses
              </h2>
              <Doughnut
                data={data}
                style={{ width: "auto", fontSize: "2em" }}
              />
            </div>
          </div>

          <h2 className="step2" style={{ color: "#413bf7" }}>
            >>> Next step: Set up your <Link to="/nestegg"> nest egg. </Link>
          </h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

// We need an intermediary variable for handling the recursive nesting.
// const SimpleModalWrapped = withStyles(styles)(IncomeStatement);

// export default connect(
//   mapStateToProps,
//   { getUser }
// )(SimpleModalWrapped);

export default connect(
  mapStateToProps,
  { getUser }
)(withStyles(styles)(IncomeStatement));
