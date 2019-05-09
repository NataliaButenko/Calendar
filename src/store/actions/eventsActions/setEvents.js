export const SET_EVENTS = 'set_events';

export const setEvents = (events) => {
  return {
    type: SET_EVENTS,
    payload: events
  }
};
