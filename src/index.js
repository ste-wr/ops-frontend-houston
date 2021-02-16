import React from 'react';
import ReactDOM from 'react-dom';
import { UserContext } from './components/core/Context'
import './index.css';

import App from './components/core/App'

ReactDOM.render(
  <React.StrictMode>
      <UserContext.Provider value={{isLoggedIn: false, token: 'abc', login: () => {}, logout: () => {}, theme: {theme: 'lightTheme'}}}>
      <App/>
      </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
