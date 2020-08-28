import React, { Component } from 'react'
// import Route from './routes'
import Home from './pages/home'
import Page1 from './pages/page1/index.tsx'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

export default class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <Router>
        <div className='app'>
          {/* <Route /> */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">page1</Link></li>
          </ul>   
          {this.props.children}
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/page1" component={Page1}/>
        </Switch>
      </Router>
    )
  }
}
