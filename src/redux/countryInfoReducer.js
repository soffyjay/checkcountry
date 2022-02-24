import { FETCH_COUNTRY_INFO } from "./actionTypes";

const initialState = {
  data: "",
};

const countryInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_INFO:
      return {
        ...state,
        data: action.info,
      };

    default:
      return state;
  }
};
export default countryInfoReducer;
