import { combineReducers } from 'redux';
import { eventCreationWindowReducer } from "./eventCreationWindowReducer";
import { eventsReducer } from "./eventsReducer";


const rootReducer = combineReducers({

  eventCreationWindow: eventCreationWindowReducer,
  events: eventsReducer

});

export default rootReducer;
