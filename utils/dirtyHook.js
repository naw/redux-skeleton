let _dispatch;

export function addDirtyHook(hook, mapStateToProps) {
  return function(state, props) {
    hook(_dispatch, state);
    return mapStateToProps.apply(this, [state, props]);
  };
}

export function configureDirtyHook(store) {
  _dispatch = store.dispatch;
}
