import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Routes } from './Routes'

import './App.scss';

export const App = () => (
  <div className="App">
    <Router>
        <Sidebar />
        <Routes />
    </Router>
  </div>
)

export default App;
