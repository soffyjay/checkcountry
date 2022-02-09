import {
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_FAILURE,
} from "./actionTypes";

const initialState = {
  loading: false,
  error: "",
  data: "",
};

export const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRY_SUCCESS:
      return {
        loading: false,
        error: "",
        data: action.payload,
      };
    case FETCH_COUNTRY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
  }
};
