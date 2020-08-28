import React from 'react'
import ReactDom from 'react-dom'
import App from './App.js'
import Router from './routes'
import './index.less'

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)