import React from "react";
import { Switch, Route } from "react-router-dom";

import DesiredPurchaseEdit from "./components/DesiredPurchaseEdit";
import DesiredPurchases from "./components/DesiredPurchases";
import RetirementPlan from "./components/RetirementPlan";
import NestEgg from "./components/NestEgg";
import Wizard1 from "./components/Wizard1";
import Wizard2 from "./components/Wizard2";
import Wizard3 from "./components/Wizard3";
import Wizard4 from "./components/Wizard4";
import IncomeStatement from "./components/IncomeStatement";
import About from "./components/About";
import LearnMore from "./components/LearnMore";
// using auth to take care of login/signup
// import LogIn from "./components/LogIn";
// import SignUp from "./components/SignUp";
import Home from "./components/Home";

export default (
  <Switch>
    <Route path="/desiredPurchase/:cardid" component={DesiredPurchaseEdit} />
    <Route path="/desiredpurchases" component={DesiredPurchases} />
    <Route path="/retirementplan" component={RetirementPlan} />
    <Route path="/nestegg" component={NestEgg} />
    <Route path="/wizardone" component={Wizard1} />
    <Route path="/wizardtwo" component={Wizard2} />
    <Route path="/wizardthree" component={Wizard3} />
    <Route path="/wizardfour" component={Wizard4} />
    <Route path="/incomestatement" component={IncomeStatement} />
    <Route path="/about" component={About} />
    <Route path="/learnmore" component={LearnMore} />
    {/* // using auth to take care of login/signup */}
    {/* <Route path="/login" component={LogIn} /> */}
    {/* <Route path="/signup" component={SignUp} /> */}
    <Route exact path="/" component={Home} />
    <Route
      path="*"
      render={() => (
        <div>
          <h1>404</h1>
        </div>
      )}
    />
  </Switch>
);
