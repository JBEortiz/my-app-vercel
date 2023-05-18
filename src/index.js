import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

reportWebVitals();
