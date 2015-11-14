## Derived Data Experiment ##

This branch is intended to explore some solutions to the question posed here:
htps://github.com/rackt/redux/issues/291#issuecomment-125047678

Do ActionCreators need to know how to call several API's to update various components?

vladar suggested a couple of approaches:

1. Move the API calls into the reducers
2. Allow reducers to emit side effects for the API calls.

My general approach is going to be:

1. topAuthor is actually derived data, so it doesn't belong in the client state (except possibly
   as cached data)

2. if all state is on the client (i.e. no API's), this is obvious --- update the state with the raw data, and the component itself (or something like reselect) is responsible for computing the derived data

3. if the state is stored on the server: Will address in future commit.


