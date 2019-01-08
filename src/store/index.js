import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "./reducers";

// const middleware = [thunk];
const middleware = [];

// the below is so that when redux dev tools is not avaialable
// on browser, it falls back to normal compose

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

export default store;
