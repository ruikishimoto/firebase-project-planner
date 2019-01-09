import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS } from "../types";

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

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({
        type: SIGNOUT_SUCCESS,
        payload: {}
      });
    });
};
