import { createStore, combineReducers, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import Home from "./reducers/home.js";

const reducers = combineReducers({ Home });
const middlewares = applyMiddleware(Thunk);
const store = createStore(reducers, middlewares);

export default store;
