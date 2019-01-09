import { LOGIN_ERROR, LOGIN_SUCCESS } from "../types";

const initialState = {
  authError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: "Login failed"
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};
