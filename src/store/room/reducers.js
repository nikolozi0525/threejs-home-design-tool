import {
  GET_ROOMS,
  ADD_ROOM,
  REMOVE_ROOM,
  CHANGE_ROOM,
  SELECT_ROOM,
} from "./actions";

export const initialState = {
  rooms: [{ index: 58, room: "Dinnig Room", color: "#D1C2F9", price: "15000" }],
  customRoom: { index: null, name: "", price: 0, furniture: [] },
  total: 15000,
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
    case SELECT_ROOM:
      return {
        ...state,
        customRoom: { ...payload },
      };
    case CHANGE_ROOM:
      return {
        ...state,
        rooms: state.rooms.map((one) => {
          if (one.index == payload.index) {
            return { ...one, ...payload };
          } else return one;
        }),
        customRoom: { ...state.customRoom, ...payload },
      };

    default:
      return state;
  }
};
