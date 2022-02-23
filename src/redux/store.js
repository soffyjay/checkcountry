import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { countriesReducer } from "./reducers";

const store = createStore(countriesReducer, applyMiddleware(thunk));

export default store;
