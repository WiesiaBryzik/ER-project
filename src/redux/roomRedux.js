import axios from 'axios';
import { API_URL } from '../config';
/* SELECTORS */

export const getAllRooms = ({ rooms }) => rooms.data;
export const getRoomById = ({ rooms }) => rooms.room;

export const getRequest = ({ rooms }) => rooms.request;

/* ACTIONS */

// action name creator
const reducerName = 'rooms';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const LOAD_ROOMS = createActionName('LOAD_ROOMS');
export const LOAD_ROOM = createActionName('LOAD_ROOM');

// action creators

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const loadRooms = payload => ({ payload, type: LOAD_ROOMS });
export const loadRoom = payload => ({ payload, type: LOAD_ROOM });


/* THUNKS */

export const loadRoomsRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/rooms`);
      dispatch(loadRooms(res.data));
      dispatch(endRequest());

    } catch (e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const loadRoomRequest = (id) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/room/${id}`);
      dispatch(loadRoom(res.data));
      dispatch(endRequest());

    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

/* INITIAL STATE */

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
  room: [],
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_ROOMS:
      return { ...statePart, data: action.payload };
    case LOAD_ROOM:
      return { ...statePart, room: action.payload };
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: false } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    default:
      return statePart;
  }
}
