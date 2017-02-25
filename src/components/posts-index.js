import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  /* lifecycle method called whenever component is about
   to be rendered to the dom for the first time */
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of posts.</div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

export default connect(null, { fetchPosts })(PostsIndex);
