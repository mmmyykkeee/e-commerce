import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom"
import Login from './Login'
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import Footer from "./Footer";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [marketercode, setMarketerCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // add logic to submit the form data to the server
    console.log(firstName, lastName, email, password, phonenumber);
  };

  return (
    <div className="register-form">
      <h2 className="container text-center font-weight-bold">
        Log in to continue
      </h2>
      <br />
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <div className="d-flex">
            <Form.Group className="col-sm-12 col-lg-6">
              <Form.Label>
                First Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="col-sm-12 col-lg-6">
              <Form.Label>
                Last Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="d-flex">
            <Form.Group className="col-sm-12 col-lg-6">
              <Form.Label>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="col-sm-12 col-lg-6">
              <Form.Label>
                Password <span className="text-danger">*</span>{" "}
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </div>
          <Form.Group className="col-lg-12">
            <Form.Label>
              Phone Number <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="+254 701 234 567"
              value={phonenumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="col-lg-12">
            <Form.Label>
              Marketer Code <span className="text-success">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="AB-123"
              value={marketercode}
              onChange={(e) => setMarketerCode(e.target.value)}
            />
          </Form.Group>
          <div className="container d-flex mt-2">
            <span className="text-danger">*</span> <p>required</p>
          </div>
          <div className="button-container container">
            <Button className="register-button" variant="success" type="submit">
              Create Account
            </Button>
            <Link to="/Login">
              <Button
                className="register-button"
                variant="primary"
                type="submit"
              >
                Already Have an Account?
              </Button>
            </Link>
          </div>
        </Form>
      </div>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Register;
