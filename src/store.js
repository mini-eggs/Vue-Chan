// @flow

import { createStore, combineReducers, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import Input from "./reducers/input";
import Home from "./reducers/home";
import Threads from "./reducers/threads";
import Posts from "./reducers/posts";

const reducers = combineReducers({ Home, Input, Threads, Posts });
const middlewares = applyMiddleware(Thunk);
const store = createStore(reducers, middlewares);

export default store;
