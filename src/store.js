import Input from "./reducers/input";
import Home from "./reducers/home";
import Threads from "./reducers/threads";
import Posts from "./reducers/posts";
import Settings from "./reducers/settings";

const {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} = require("redux");
const Thunk = require("redux-thunk");
const { offline } = require("redux-offline");
const offlineConfig = require("redux-offline/lib/defaults");

const reducers = combineReducers({ Home, Input, Threads, Posts, Settings });
const middlewares = compose(
  applyMiddleware(Thunk.default),
  offline(offlineConfig)
);
const store = createStore(reducers, middlewares);

export default store;
