import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <h1>Welcome</h1>
      <h3>Sign Up Page</h3>
      <button>Sign Up</button>
      <h3>
        <Link to="/">home</Link>.
      </h3>
    </div>
  );
}

export default SignUp;
