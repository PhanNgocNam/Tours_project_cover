import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tours_provider from './Contexts/Tours_context'

ReactDOM.render(
  <React.StrictMode>
    <Tours_provider>
      <App />
    </Tours_provider>
  </React.StrictMode>,
  document.getElementById('root')
);

