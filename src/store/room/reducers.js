import { GET_ROOMS, ADD_ROOM, REMOVE_ROOM } from "./actions";

export const initialState = {
  rooms: [],
  total: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ROOMS:
      return {
        ...state,
        rooms: payload,
      };

    case ADD_ROOM:
      return {
        ...state,
        rooms: [...state.rooms, payload],
        total: state.total + Number(payload.price),
      };
    case REMOVE_ROOM:
      return {
        ...state,
        rooms: state.rooms.filter((one) => one.index != payload.index),
        total: state.total - Number(payload.price),
      };

    default:
      return state;
  }
};
