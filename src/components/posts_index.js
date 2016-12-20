// PROCESS FOR CREATING A CONTAINER THAT CAN CALL ACTION CREATORS
// 1) Import connect at top
// 2) Import action creator
// 3) We define our mapDispatchToProps() function
// 4) And we connect it to our component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  // componentWillMount() is a LIFECYCLE METHOD only
  // called ONCE, just when component is
  // initially loaded to the DOM.
  // More on the other built-in React lifecycle methods here:
  // https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <strong>{post.title}</strong>
            <div className="text-xs-right categories">
              {post.categories}
            </div>
          </Link>
        </li>
      );
    });
  }

  render () {
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  }
}
// a shortcut to avoid mapDispatchToProps()
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
