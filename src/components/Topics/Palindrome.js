import React, { Component } from 'react'

export default class Palindrome extends Component {
    constructor(){
        super()
        this.state = {userInput: '', palindrome: ''}
    }
    isPalindrome = () => {
        let backwardsString = this.state.userInput.split('').reverse().join('')
        if(this.state.userInput === backwardsString){
            this.setState({palindrome: 'yes'})
        }else{this.setState({palindrome:'no'})}
    }
  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4></h4>
        <input className='inputLine' onChange={e => {this.setState({userInput: e.target.value})}}/>
        <button className='confirmationButton' onClick={this.isPalindrome}>Check</button>
        <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}
