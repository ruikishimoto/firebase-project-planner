import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../types";

export const createProject = project => (
  dispatch,
  getState,
  { getFirestore }
) => {
  // make async calls to database
  const firestore = getFirestore();
  const state = getState();
  const { profile, auth } = state.firebase;
  firestore
    .collection("projects")
    .add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: auth.uid,
      createdAt: new Date()
    })
    .then(() => {
      dispatch({
        type: CREATE_PROJECT,
        payload: { project }
      });
    })
    .catch(err => {
      dispatch({
        type: CREATE_PROJECT_ERROR,
        payload: { err }
      });
    });
};
