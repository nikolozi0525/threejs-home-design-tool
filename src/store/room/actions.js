export const GET_ROOMS = "rooms/GET_ROOMS";
export const ADD_ROOM = "rooms/ADD_ROOM";
export const REMOVE_ROOM = "rooms/REMOVE_ROOM";
export const SELECT_ROOM = "rooms/SELECT_ROOM";
export const CHANGE_ROOM = "rooms/CHANGE_ROOM";

export const getRooms = (payload) => ({
  type: GET_ROOMS,
  payload,
});

export const addRoom = (payload) => ({
  type: ADD_ROOM,
  payload,
});

export const removeRoom = (payload) => ({
  type: REMOVE_ROOM,
  payload,
});

export const selectRoom = (payload) => ({
  type: SELECT_ROOM,
  payload: payload.furniture ? payload : { ...payload, furniture: [] },
});

export const changeRoom = (payload) => ({
  type: CHANGE_ROOM,
  payload,
});
