import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer";
import "./App.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      // Code to handle login
      console.log(
        `Logging in with username: ${username} and password: ${password}`
      );
    } else {
      // Code to handle registration
      console.log(
        `Registering with username: ${username} and password: ${password}`
      );
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

    return (
        <div>
        <form className="login-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}
          <input
            type="text"
            placeholder={isLogin ? "Username" : "Email"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <button type="button" onClick={toggleForm}>
            {isLogin ? "Create an account" : "Already have an account?"}
          </button>
            </form>
            <Footer />
      </div>
    );
};

export default Login;
