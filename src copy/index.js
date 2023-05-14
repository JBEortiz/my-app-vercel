import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './pages/home/HomePage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, createBrowserRouter,
  Router,Routes,HomeLayoutRoute, RouterProvider } from "react-router-dom";
import Footers from './pages/footer/Footers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='bg-transparent'>
    <React.StrictMode>
       <App/> 
       <Footers></Footers>
    </React.StrictMode>
  </div>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
