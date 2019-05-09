export const ADD_EVENT = 'add_event';

export const addEvent = (event) => {
  return{
    type: ADD_EVENT,
    payload: event
  }
};
