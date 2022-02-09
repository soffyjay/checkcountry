import {
  fetchCountrySuccess,
  fetchCountryFailure,
  fetchCountryRequest,
} from "./actions";
import axios from "axios";

export const fetchCountries = () => {
  return (dispatch) => {
    dispatch(fetchCountryRequest());
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/all`)
      .then((response) => {
        dispatch(fetchCountrySuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCountryFailure(error.message));
      });
  };
};

export const searchCountries = (name) => {
  return (dispatch) => {
    dispatch(fetchCountryRequest());
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/name/${name}`)
      .then((response) => {
        dispatch(fetchCountrySuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCountryFailure(error.message));
      });
  };
};

//filter box
export const searchCountriesRegion = (region) => {
  return (dispatch) => {
    dispatch(fetchCountryRequest());
    axios
      .get(`${process.env.REACT_APP_BASE_URL}continent/${region}`)
      .then((response) => {
        dispatch(fetchCountrySuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCountryFailure(error.message));
      });
  };
};
