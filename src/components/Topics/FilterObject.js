import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor(props){
        super(props)
        this.state = {
        unFilteredArray: [
            {color: "purple", type: "minivan", capacity: 7},
            {color: "red", type: "station wagon", capacity: 5, year: 2015},
            {color: 'blue', type: 'coupe', capacity: 5, year: 2020}
        ],
        userInput: '',
        filteredArray: [] 
    }
    }
    filterArray = () => {
        const newArray = []
        this.state.unFilteredArray.forEach(element => {
            if(element.hasOwnProperty(this.state.userInput)){
                newArray.push(element)
            }
        })
        this.setState({filteredArray: newArray})
    }
  render() {
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
        <input className='inputLine' onChange={e => {this.setState({userInput: e.target.value})}}/>
        <button className='confirmationButton' onClick={this.filterArray}>Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
      </div>
    )
  }
}
