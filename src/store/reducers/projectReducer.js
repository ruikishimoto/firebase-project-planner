import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../types";

const initialState = {
  projects: [
    {
      id: "1",
      title: "first project",
      content: "this is the content of the first ever project"
    },
    {
      id: "2",
      title: "second project",
      content: "this is the content of the second ever project"
    },
    {
      id: "3",
      title: "third project",
      content: "this is the content of the third ever project"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log("created project", action.payload.project);
      return state;
    case CREATE_PROJECT_ERROR:
      console.log("create project error", action.payload.err);
      return state;
    default:
      return state;
  }
};
