import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("You have to fill in all fields!");
    } else {
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("userEmail", JSON.stringify(email));
      localStorage.setItem("userPassword", JSON.stringify(password));
      console.log("User saved in Local Storage");

      setSuccess(true);
    }
  }

  return (
    <>
      {success ? (
        <div class="success">
          <h1>Your registration was succesfully done!</h1>
          <p class="here">
            Go to login <Link to="/login">Here</Link>
          </p>
        </div>
      ) : (
        <>
          <div class="register">
            <h1>Welcome to the dream-team :)</h1>
            <form onSubmit={handleFormSubmit} class="register-form">
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                onChange={(event) => setUsername(event.target.value)}
                name="username"
              />
              <label>E-mail</label>
              <input
                type="email"
                placeholder="E-mail"
                onChange={(event) => setEmail(event.target.value)}
                name="email"
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                name="password"
              />
              <button class="submit-btn">Submit</button>
              <h3>{error}</h3>
            </form>
          </div>
          <div class="toLogin">
            Back to login <Link to="/login">Here</Link>
          </div>
        </>
      )}
    </>
  );
}

export default Register;
