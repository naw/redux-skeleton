import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'

class AddPost extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { title: '', author: '' };
  }

  setTitle(newTitle) {
    this.setState({ title: newTitle });
  }

  setAuthor(newAuthor) {
    this.setState({ author: newAuthor });
  }

  add(e) {
    e.preventDefault();
    this.props.dispatch(addPost(this.state.title, this.state.author));
    this.setState({ title: '', author: '' });
  }

  render() {

    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={(e) => this.add(e)}>
          Title: <input value={this.state.title} onChange={(e) => this.setTitle(e.target.value)} type="text"/><br/>
          Author: <input value={this.state.author} onChange={(e) => this.setAuthor(e.target.value)} type="text"/><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddPost)
