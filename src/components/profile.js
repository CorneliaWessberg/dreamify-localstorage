import React from "react";

function Profile() {
  const username = localStorage.getItem("username").replace(/"/g, "");
  const email = localStorage.getItem("userEmail").replace(/"/g, "");
  const pass = localStorage.getItem("userPassword").replace(/"/g, "");

  return (
    <>
      <div class="dashboard">
        <h1 class="profile">Profile information</h1>
        <p>Username: {username} </p>
        <p>E-mail: {email}</p>
        <p>Password: {pass}</p>
      </div>
    </>
  );
}

export default Profile;
