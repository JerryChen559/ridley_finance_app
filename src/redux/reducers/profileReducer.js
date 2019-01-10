import axios from "axios";

const initialState = {
  user: {},
  loggedIn: false,
  statusError: false
};

const GET_USER = "GET_USER";

export function getUser() {
  console.log("GET_USER HIT");
  return {
    type: GET_USER,
    payload: axios.get("/api/userprofile")
  };
}

function profileReducer(state = initialState, action) {
  console.log("PROFILE REDUCER HIT: Action ->", action);

  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data,
        loggedIn: true
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        statusError: true
      };
    default:
      return state;
  }
}

export default profileReducer;
