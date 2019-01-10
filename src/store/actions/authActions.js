import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../types";

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

export const signUp = newUser => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(response => {
      return firestore
        .collection("users")
        .doc(response.user.uid)
        .set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: (newUser.firstName[0] + newUser.lastName[0]).toUpperCase()
        });
    })
    .then(() => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: {}
      });
    })
    .catch(err => {
      dispatch({
        type: SIGNUP_ERROR,
        payload: {
          err
        }
      });
    });
};
