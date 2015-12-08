const koConnect = function(viewModel, store, mapStateToProps, mapDispatchToProps) {
  const applyState = function() {
    const calculatedStateProps = mapStateToProps(store.getState());
    Object.keys(calculatedStateProps).forEach((key) => {
      if(viewModel[key]) {
        viewModel[key](calculatedStateProps[key])
      }
    });

    const calculatedDispatchProps = mapDispatchToProps(store.dispatch);
    Object.keys(calculatedDispatchProps).forEach((key) => {
      viewModel[key] = calculatedDispatchProps[key];
    });
  }
  store.subscribe(function() {
    applyState();
  });
  applyState();
}


export default koConnect;
