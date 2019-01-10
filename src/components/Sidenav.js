import React from "react";
import { Link } from "react-router-dom";
import "./Sidenav.css";

function Sidenav() {
  return (
    <div>
      <nav className="side-nav">
        <span>
          Step 1 <Link to="/incomestatement"> Income Statement </Link>
        </span>
        <span>
          Step 2 <Link to="/nestegg"> Nest Egg </Link>
        </span>
        <span>
          Step 3 <Link to="/retirementplan"> Retirement Plan </Link>
        </span>
        <span>
          Step 4 <Link to="/desiredpurchases"> Desired Purchases </Link>
        </span>
      </nav>
    </div>
  );
}

export default Sidenav;
