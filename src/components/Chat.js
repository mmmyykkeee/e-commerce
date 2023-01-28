import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import handleSellButtonClick from './Header'
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
      {/* <div className="container text-center">
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
        </div> */}
      
        <div className="container border messages mb-3 col-sm-6">
          <aside className="right-aside border col-sm-0">
            <div className="top-bar">
              <h3 className="title mx-2 text-success">Messages</h3>
              <i className="fa fa-bars mx-5 mt-2" />
            </div>
            <div className="empty-messages m-5">
              <img
                src="https://assets.jiji.co.ke/static/img/profile/messenger-man.svg"
                alt=""
              />
              <p>You Have no new Messages</p>
            </div>
          </aside>

          <div className="messages-area col-sm-12">
            <div className="text-area">
              <p>You do not have any Messages yet</p>
              <p>Find things to discuss or sell something</p>
              <p className="">or</p>
              <Link to={handleSellButtonClick}>
                <button className="btn btn-warning">Sell</button>
              </Link>
            </div>
          </div>
        </div>
      

      <Footer />
    </div>
  );
};

export default Chat;
