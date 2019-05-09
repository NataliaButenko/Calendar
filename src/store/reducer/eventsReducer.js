import { SET_EVENTS } from "../actions/eventsActions/setEvents";
import { ADD_EVENT } from "../actions/eventsActions/addEvent";
import { DELETE_EVENT } from "../actions/eventsActions/deleteEvent";

export const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_EVENTS: {
      return action.payload
    }
    case ADD_EVENT: {
      return [...state, action.payload]
    }
    case DELETE_EVENT: {
      return state.filter(event => {
        return ((event.start !== action.payload.start) || (event.duration !== action.payload.duration) || (event.title !== action.payload.title))
      })
    }
    default: {
      return state
    }
  }
};
