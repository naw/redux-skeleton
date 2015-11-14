import React, { Component } from 'react'
import { connect } from 'react-redux'

class TopAuthor extends Component {

  render() {
    // Need to derive topAutho based on number of posts by that author.
    const { authors, posts } = this.props;

    // Calculate postCount for each author:
    const authorsWithPostCounts = authors.map((author) => {
      const postCount = posts.filter((post) => post.authorName === author.name).length;
      return Object.assign({}, author, { postCount: postCount });
    });

    // Sort by postCount (highest first), and grab first element:
    const topAuthor = authorsWithPostCounts.concat().sort((a, b) => {
      return b.postCount - a.postCount
    })[0];

    const topAuthorName = topAuthor ? topAuthor.name : null;

    return (
      <div>
        <h1>Top Author</h1>
        {topAuthorName}
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    authors: state.authors,
    posts: state.posts
  }
}

export default connect(mapStateToProps)(TopAuthor)
