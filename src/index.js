import React from 'react';
import ReactDOM from 'react-dom';
import { UserContext } from './components/core/Context'
import { lightTheme } from './themes'
import './index.css';

import App from './components/core/App'


ReactDOM.render(
  <React.StrictMode>
      <UserContext.Provider>
      <App/>
      </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
