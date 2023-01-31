import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import '../App.css'

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Connect to a socket server
    const socket = new WebSocket("ws://localhost:8080");

    // Handle incoming messages
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages([...messages, data.message]);
    };

    setSocket(socket);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send message to the socket server
    socket.send(JSON.stringify({ message: newMessage }));
    setNewMessage("");
  };

  return (
    <div>
      <div className="container text-center">
        <h1>Chat</h1>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your message"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
          />
          <button className="mx-2 btn btn-success" type="submit">
            Send
          </button>
          <br />
          <button className="mt-2 mb-2 btn btn-success" type="submit">
            Request Phone Number
          </button>
        </form>
      </div>


      <div className="container ">
        <div className="row d-flex">
          <div className="left-side col-lg-4 col-md-6 right-aside d-lg-block d-xs-none">
            <div className="d-flex align-items-center justify-content-around mt-3 ">
              <h3>Messages</h3>
              <i className="fa fa-bars" />
            </div>
            <hr />
            <div className="d-flex image-holder">
              <img
                className="m-auto"
                src="https://assets.jiji.co.ke/static/img/profile/messenger-man.svg"
                alt=""
              />
            </div>
          </div>
          <div className="right-side col-lg-8 col-md-6 messages">
              <i className=" messages-bars fa fa-bars mt-3"></i>
            <div className="d-flex tes align-items-center justify-content-around">
              <div className="m-auto">
                <p>You have no messages yet</p>
                <p><Link>Find something</Link> to discuss or Post something</p>
                <button className="btn btn-warning border">Post something</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Chat;
