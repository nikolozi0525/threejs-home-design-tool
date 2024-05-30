import { GET_ROOMS, ADD_ROOM } from "./actions";

export const initialState = {
  rooms: [],
  total: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return {
        ...state,
        rooms: action.payload,
      };

    case ADD_ROOM:
      return {
        ...state,
        rooms: [...state.rooms, action.payload],
      };

    default:
      return state;
  }
};
