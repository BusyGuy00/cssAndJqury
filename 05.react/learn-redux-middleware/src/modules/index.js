import {combineReducers} from "redux";
import counter from "./counter";
import posts from "./posts";

const rootReducer = combineReducers({ counter : counter, posts: posts});

export default rootReducer;