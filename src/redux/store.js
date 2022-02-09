import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { UsersReducer } from "./reducers";

const store = createStore(UsersReducer, applyMiddleware(thunk));

export default store;
