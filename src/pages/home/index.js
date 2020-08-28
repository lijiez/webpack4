import React, { Component } from 'react'
import img from '../../assets/images/awsl.png'

import './index.less'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        home111
        <img src={img} />
        {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page1">page1</Link></li>
        </ul> */}
      </div>
    )
  }
}
