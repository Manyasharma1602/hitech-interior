import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import App from './App'; // Your main App component
// import reportWebVitals from './reportWebVitals'; // Removed if deleted

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you deleted reportWebVitals.js, ensure this line is also removed or commented
// reportWebVitals();
