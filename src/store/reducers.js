import roomReducer from "./room/reducers";

export default ({ room }, action) => ({
  room: roomReducer(room, action),
});
