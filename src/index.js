import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/config/i18n'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback='Loading...'>
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
