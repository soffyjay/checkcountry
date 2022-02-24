import actionType from "./actionTypes";

export const fetchCountryInfo = (country) => {
  return {
    type: actionType.FETCH_COUNTRY_INFO,
    info: country,
  };
};
