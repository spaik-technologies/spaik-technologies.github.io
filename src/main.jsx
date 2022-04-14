import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import App from './App'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Home from './pages/Home';

import './css/style.scss';

import AOS from 'aos';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)