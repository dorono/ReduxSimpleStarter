import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from 'search_bar';

const API_KEY = 'AIzaSyBVFyv6UJcXQIEFCmrXSnkQerhqPTHn3qA';



// Create a new component. This component should product
// some HTML
const App = () => {
  return <div>Hi!</div>
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
