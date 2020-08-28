import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from '../App'
import Home from '../pages/home'
import Page1 from '../pages/page1/index.tsx'

export default class index extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={App}/>
        <Route path="/page1" component={Page1}/>
        {/* {this.props.children} */}
      </Router>
    )
  }
}
