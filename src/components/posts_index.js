// PROCESS FOR CREATING A CONTAINER THAT CAN CALL ACTION CREATORS
// 1) Import connect at top
// 2) Import action creator
// 3) We define our mapDispatchToProps() function
// 4) And we connect it to our component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';


class PostsIndex extends Component {
  // componentWillMount() is a LIFECYCLE METHOD only called ONCE, just when component is
  // initially loaded to the DOM.
  componentWillMount() {
    this.props.fetchPosts();
  }

  render () {
    return(
      <div>List of blog posts</div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(null, {fetchPosts})(PostsIndex);
