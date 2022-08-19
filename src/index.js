import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeColor from './context/ThemeColor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeColor.Provider value="green">
    <App />
    </ThemeColor.Provider>
  </React.StrictMode>
);
