// @flow

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";
import { offline } from "redux-offline";
import offlineConfig from "redux-offline/lib/defaults";
import Input from "./reducers/input";
import Home from "./reducers/home";
import Threads from "./reducers/threads";
import Posts from "./reducers/posts";
import Settings from "./reducers/settings";

const reducers = combineReducers({ Home, Input, Threads, Posts, Settings });
const middlewares = compose(applyMiddleware(Thunk), offline(offlineConfig));
const store = createStore(reducers, middlewares);

export default store;
