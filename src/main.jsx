import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { FavsProvider } from './store/FavsContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavsProvider>
      <App />
    </FavsProvider>
  </React.StrictMode>
);