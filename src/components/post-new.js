import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// import { bindActionCreators } from 'redux';
// import { fetchPosts } from '../actions/index';

class PostsNew extends Component {
  /* lifecycle method called whenever component is about
   to be rendered to the dom for the first time */
  // componentWillMount() {
  //   this.props.fetchPosts();
  // }

  render() {
    return (
      <form >
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Content</label>
          <input type="text-area" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);
