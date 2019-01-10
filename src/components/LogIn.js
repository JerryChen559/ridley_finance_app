import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Welcome</h1>
      <h3>Login Page</h3>
      <button>Login</button>
      <h3>
        <Link to="/">home</Link>.
      </h3>
    </div>
  );
}

export default Login;
