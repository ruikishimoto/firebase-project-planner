import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../types";

export const createProject = project => (
  dispatch,
  getState,
  { getFirestore }
) => {
  // make async calls to database
  const firestore = getFirestore();
  firestore
    .collection("projects")
    .add({
      ...project,
      authorFirstName: "Somefirst",
      authorLastName: "Somelast",
      authorId: 12345,
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
