import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  //hämtar token ifrån localstorage, history för att kunna navigera till allan component
  const token = localStorage.getItem("loggedIn", "token");
  const history = useNavigate();

  function logOut() {
    localStorage.clear();
    history("/");
  }
  //conditional rendering i meny beroende på om man är inloggad eller inte
  return (
    <>
      <div class="header">
        <div class="logo">
          <Link to="/">Dreamify</Link>
        </div>

        <div class="login-btns">
          {token ? (
            <div>
              <Link to="/profile" class="Profile-btn">
                Profile
              </Link>
              <button onClick={logOut} class="logOut">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
