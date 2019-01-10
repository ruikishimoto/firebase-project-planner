import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../types";

const initialState = {
  authError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log(action.payload.err);
      return {
        ...state,
        authError: "Login failed"
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case SIGNOUT_SUCCESS:
      return state;
    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case SIGNUP_ERROR:
      console.log(action.payload.err);
      return {
        ...state,
        authError: action.payload.err.message
      };
    default:
      return state;
  }
};
