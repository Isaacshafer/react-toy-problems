import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
    constructor(props){
        super(props)
        this.state = {evenArray: [], oddArray: [], userInput: ''}
    }
    setUserInput = (e) => {
        this.setState({userInput: e.target.value})
    }
    isEvenOrOdd = () => {
        let evens = []
        let odds = []
        this.state.userInput.split(",").forEach(element => {
            if(element % 2 === 0){
                evens.push(element)
            }else if(element % 2 !== 0){
                odds.push(element)
            }
            console.log(this.state)
            this.setState({evenArray: evens, oddArray: odds})

        });
    }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className='inputLine' onChange={e => this.setUserInput(e)}/>
        <button className='confirmationButton' onClick={this.isEvenOrOdd}>Split</button>
        <span className='resultsBox'>{this.state.evenArray}</span>
        <span className='resultsBox'>{this.state.oddArray}</span>
      </div>
    )
  }
}
