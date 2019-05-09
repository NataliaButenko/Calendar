export const DELETE_EVENT = 'delete_event';

export const deleteEvent = (event) => {
  return{
    type: DELETE_EVENT,
    payload: event
  }
};
