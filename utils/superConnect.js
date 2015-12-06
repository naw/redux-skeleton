import { connect } from 'react-redux';

// All of this is just monkey patching handleChange() in the connected
// component so that it calls the `runSideEffects` function each time
// the store notifies the component that the store state has changed.

const superConnect = function(runSideEffects, mapStateToProps, mapDispatchToProps, mergeProps, options) {
  const wrapWithConnect = connect(mapStateToProps, mapDispatchToProps, mergeProps, options)
  return function(WrappedComponent) {
    const ConnectedComponent = wrapWithConnect(WrappedComponent);
    class SuperConnectedComponent extends ConnectedComponent {

      handleChange() {
        // Original behavior:
        if (!this.unsubscribe) {
          return
        }

        this.setState({
          storeState: this.store.getState()
        })

        // Additional behavior:
        runSideEffects(this.store.getState(), this.store.dispatch);
      }
    }

    return SuperConnectedComponent;
  }
}

export default superConnect
