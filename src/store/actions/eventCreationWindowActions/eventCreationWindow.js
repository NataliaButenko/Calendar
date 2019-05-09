export const CREATE_EVENT_WINDOW_OPEN = 'create_event_window_open';

export const CREATE_EVENT_WINDOW_CLOSE = 'create_event_window_close';

export const openEventCreationWindow = () => {
  return {
    type: CREATE_EVENT_WINDOW_OPEN,
    payload: true
  }
};

export const closeEventCreationWindow = () => {
  return {
    type: CREATE_EVENT_WINDOW_CLOSE,
    payload: false
  }
};
