export const GET_ROOMS = "rooms/GET_ROOMS";
export const ADD_ROOM = "rooms/ADD_ROOM";

export const getRooms = (payload) => ({
  type: GET_ROOMS,
  payload,
});

export const addRoom = (payload) => ({
  type: ADD_ROOM,
  payload,
});
