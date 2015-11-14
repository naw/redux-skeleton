import React, { Component } from 'react'
import { connect } from 'react-redux'

class AllAuthors extends Component {

  render() {
    const {authors } = this.props;

    const authorItems = authors.map((author) => <li>{author.name}</li>);

    return (
      <div>
        <h1>Authors</h1>
        <ul>
          {authorItems}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    authors: state.authors
  }
}

export default connect(mapStateToProps)(AllAuthors)
