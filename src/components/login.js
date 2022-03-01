import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const history = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("userPassword").replace(/"/g, "");
    let user = localStorage.getItem("username").replace(/"/g, "");

    if (!username || !password) {
      setError("You have to fill in all fields");
    } else if (password !== pass || username !== user) {
      setError("Didn't match any user");
    } else {
      localStorage.setItem("loggedIn", "token");
      setSuccess(true);
      history("/profile");
      window.location.reload();
    }
  }
  return (
    <>
      {success ? (
        <h2>You are now logged in!</h2>
      ) : (
        <div class="login">
          <h1>Welcome back!</h1>

          <form class="login-form" onSubmit={handleLogin}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <button class="login-btn">Login</button>
            <h3>{error}</h3>
          </form>

          <p class="here">
            Not a member yet? :) Register <Link to="/register">Here</Link>
          </p>
        </div>
      )}
    </>
  );
}

export default Login;
