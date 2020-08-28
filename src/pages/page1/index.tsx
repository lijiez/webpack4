import React, { Component } from 'react'

export default class Page1 extends Component {
  componentDidMount() {
    const a = [1,3,2,4,8,1,2]
    // a.map
    console.log(new Set(a));
    
  }

  render() {
    return (
      <div>
        page + ts
      </div>
    )
  }
}
