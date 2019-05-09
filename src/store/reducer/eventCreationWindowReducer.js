import { CREATE_EVENT_WINDOW_CLOSE, CREATE_EVENT_WINDOW_OPEN } from "../actions/eventCreationWindowActions/eventCreationWindow";

const initialState = false;

export const eventCreationWindowReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT_WINDOW_CLOSE: {
      return action.payload
    }
    case CREATE_EVENT_WINDOW_OPEN: {
      return action.payload
    }
    default: {
      return state
    }
  }
};
