import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextApp from './context/ContextApp';

ReactDOM.render(
  <React.StrictMode>
    <ContextApp>
     <App />
    </ContextApp>
  </React.StrictMode>,
  document.getElementById('root')
);
