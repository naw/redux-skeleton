import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Counter extends Component {

  render() {
    return (
      <div>
        counter is {this.props.counter}
        <button onClick={this.props.increment}>Increment</button>
      </div>
    )
  }


}

const mapStateToProps = function(state) {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    increment: () => dispatch(actions.incrementCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
