// brackets allow us to just use 'Component' instead of React.Component
import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor is a reserved keyword, native to es6 or React (not 100% sure)
  constructor (props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  render() {
    return (
      // onChange is native to React
      // when we add 'value', that means we are using a a 'controlled' form input, since the state comes
      // from the state
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // we come up with this function name, not native to React
  // we are feeding the function the event object
  // THIS IS A LONG HAND VERSION OF WHAT WE'RE PUTTINGINTO THE <input /> tag
  // onInputChange(event){
  //   console.log(event.target.value)
  // }
}

export default SearchBar;
