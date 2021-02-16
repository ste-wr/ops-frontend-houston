import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './components/core/Context'
import './index.css';

import App from './components/core/App'


ReactDOM.render(
  <React.StrictMode>
      <UserProvider>
        <App/>
      </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
