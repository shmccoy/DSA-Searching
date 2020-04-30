import React from 'react';
import Linear from './linear';
import Binary from './binary';

class SearchContainer extends React.Component {
  state = {
    linear: 0,
    binary: 0,
    searchTerm: ''
  }

  updateLinear = linear => {
    this.updateState({ linear })
  }

  updateBinary = binary => {
    this.updateState({ binary })
  }

  handleSubmit = e => {
    e.preventDefault()
    let linear = Linear(this.props.data, Number(this.state.searchTerm))
    this.setState({ linear })
    let binary = Binary(this.props.data, Number(this.state.searchTerm))
    this.setState({ binary })
    // Linear(this.state.searchTerm)
    //   .then(linear => this.setState({ linear }))
    // Binary(this.state.searchTerm)
    //   .then(binary => this.setState({ binary }))
  }

  render(){
    return (
      <div className="searchContainer">
        <form 
          className='search-form'
          onSubmit={this.handleSubmit}
        >
          <input 
            required
            type='text' 
            name='number-to-search-for' 
            id='search-term'
            value={this.state.searchTerm}
            placeholder='search for a number'
            onChange={e => this.setState({ searchTerm: e.target.value })}
          />
          <button type='submit'>
            Submit
          </button>
        </form>
        <div>
          <h3>Linear Operations to find: <span>{this.state.linear}</span></h3>
        </div>
        <div>
          <h3>Binary Operations to find: <span>{this.state.binary}</span></h3>
        </div>
      </div>
    );
    }
}

export default SearchContainer;