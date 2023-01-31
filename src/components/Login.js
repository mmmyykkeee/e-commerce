import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../App.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      // Code to handle login
      console.log(
        `Logging in with Phone Number: ${phonenumber} and password: ${password}`
      );
    } else {
      // Code to handle registration
      console.log(
        `Registering with Phone Number: ${phonenumber} and password: ${password}`
      );
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h2 className="container text-center font-weight-bold">
        Log in to continue
      </h2>
      <br />
      <form className="login-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={(phonenumber = "")}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        )}
        <input
          type="text"
          placeholder={isLogin ? "+254701234567" : "Email"}
          value={phonenumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Log In" : "Register"}</button>

        <Link to="/Register">
          <button type="button">Create an Account</button>
        </Link>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
