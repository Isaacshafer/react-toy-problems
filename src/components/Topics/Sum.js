import React, { Component } from 'react'

export default class Sum extends Component {
    constructor(){
        super()
        this.state = {number1: 0, number2: 0, sum: null}
    }
    addNumbers = () => {
       let total = parseInt(this.state.number1) + parseInt(this.state.number2)
       this.setState({sum: total})
    }
  render() {
    return (
      <div className='puzzleBox'>
        <h4>Sum</h4>
        <input className='inputLine' type='number' onChange={e => {this.setState({number1: e.target.value})}}/>
        <input className='inputLine' type='number' onChange={e => {this.setState({number2: e.target.value})}}/>
        <button className='confirmationButton' onClick={this.addNumbers}>Add</button>
        <span className='resultsBox'>{this.state.sum}</span>
      </div>
    )
  }
}
