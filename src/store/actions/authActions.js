import { LOGIN_SUCCESS, LOGIN_ERROR } from "../types";

export const signIn = credentials => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => {
      dispatch({ type: LOGIN_SUCCESS, payload: {} });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_ERROR,
        payload: {
          err
        }
      });
    });
};
