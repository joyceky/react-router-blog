import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import { createPost } from '../actions/index';

const renderField = ({ input, label, type, element, meta: { touched, error, warning } }) => {
  return (
    <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
      <label>
        {label}
        {element === 'input' ?
        <input {...input} className="form-control" type={type}/> :
        <textarea {...input} className="form-control" type={type}/>}

        {touched && (error && <div className="alert alert-danger">{error}</div>)}
      </label>
    </div>
  );
}

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit = (fields) => {
    this.props.createPost(fields).then(() => {
      // browserHistory.push('/');
      this.context.router.push('/');
    });
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <h3>Create a New Post</h3>

          <Field element="input" label="Title" name="title" type="text" component={renderField} />
          <Field element="input" label="Categories" name="categories" type="text" component={renderField} />
          <Field element="textarea" label="Content" name="content" component={renderField} />
          <button type="submit" className="btn btn-primary">Create Post</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a username';
  }
  if (!values.categories) {
    errors.categories = 'Enter categories';
  }
  if(!values.content) {
    errors.content = 'Enter some content';
  }
  return errors;
}

export default connect(null, {createPost})(reduxForm({
  form: 'PostsNew',
  validate
})(PostsNew));
