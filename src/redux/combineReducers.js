import countryInfoReducer from "./countryInfoReducer";
import { countriesReducer } from "./reducers";
import { combineReducers } from "redux";

export default combineReducers({
  countryInfoReducer,
  countriesReducer,
});
