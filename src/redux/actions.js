import actionType from "./actionTypes";

export const fetchCountryRequest = () => {
  return {
    type: actionType.FETCH_COUNTRY_REQUEST,
  };
};

export const fetchCountrySuccess = (countries) => {
  return {
    type: actionType.FETCH_COUNTRY_SUCCESS,
    payload: countries,
  };
};

export const fetchCountryFailure = (error) => {
  return {
    type: actionType.FETCH_COUNTRY_FAILURE,
    payload: error,
  };
};
