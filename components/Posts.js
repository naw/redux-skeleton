import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends Component {

  render() {
    const {posts } = this.props;

    const postRows = posts.map((post) => <tr><td>{post.title}</td><td>{post.authorName}</td></tr>);

    return (
      <div>
        <h1>Posts</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {postRows}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Posts)
