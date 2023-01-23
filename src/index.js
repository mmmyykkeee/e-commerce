import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Shopinfo from './Shopinfo';
import Shop from './Shop';
import reportWebVitals from './reportWebVitals';
import Blog from './Blog';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';
import BlogDetails from './BlogDetails';
import Contact from './Contact';
import Upload from './Upload';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Shopinfo />
    <Shop />
    <Blog />
    <ShoppingCart />
    <Checkout />
    <BlogDetails />
    <Contact />
    <Upload />
    <Login />
  </React.StrictMode>
);

reportWebVitals();
