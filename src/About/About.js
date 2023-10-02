import React, { Component } from 'react'

export default class About extends Component {
    constructor() {
        super();
      }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
