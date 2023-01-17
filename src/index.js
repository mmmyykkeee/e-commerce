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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Shop />
    <Shopinfo />
    <ShoppingCart />
    <Checkout />
    <Blog />
    <BlogDetails />
<Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
