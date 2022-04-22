import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor(){
        super()
        this.state = {unfilteredArray: ['hello', 'hola', 'howdy'], userInput: '', filteredArray: []}
    }
    filterString = () => {
        const newArray = []
        this.state.unfilteredArray.forEach(element => {
            if (element.includes(this.state.userInput)){
                newArray.push(element)
            }
        })
        this.setState({filteredArray: newArray})
    }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className='puzzleText'>Original: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
        <input className='inputLine' onChange={e => {this.setState({userInput: e.target.value})}}/>
        <button className='confirmationButton' onClick={this.filterString}>Filter</button>
        <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
      </div> 
    )
  }
}
