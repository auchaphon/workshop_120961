import thunk from "redux-thunk";
// REDUX START
import reducer from "./reducers/index"
import { createStore, applyMiddleware } from "redux";

let store = createStore(reducer,applyMiddleware(thunk));

export default store

