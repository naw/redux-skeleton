## Intent

This is the skeleton for a webpack-enabled react-redux application, with [redux-devtools](https://github.com/gaearon/redux-devtools) ready to go.

Thie goal is to have a readily clonable application infrastructure on which you can build basic react-redux
applications.

##Installation:

1. Clone this repository.

2. Run `npm install`

3. Run `npm start`

## Configuration:

[redux-devtools](https://github.com/gaearon/redux-devtools) is on by default. You can turn it off by modifying the `USE_DEV_TOOLS` constant in ./configureStore.js

## Acknowledgements

The basic file structure, webpack config, etc. was lifted from the TodoMVC example in the examples folder of [redux](https://github.com/rackt/redux)

Specifically from [this place](https://github.com/rackt/redux/tree/0509c6c0b0730920991af32925a339215dd07bff/examples/todomvc) in the tree.
