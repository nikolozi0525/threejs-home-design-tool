import { useState } from "react";

import { useStateValue } from "../../index";
import {
  addRoom,
  removeRoom as removeRoomAction,
  selectRoom as selectRoomAction,
  changeRoom as changeRoomAction,
} from "../actions";

const useRooms = () => {
  const [{ room }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const addNewRoom = (payload) => {
    dispatch(addRoom(payload));
  };

  const removeRoom = (payload) => {
    dispatch(removeRoomAction(payload));
  };

  const selectRoom = (payload) => {
    dispatch(selectRoomAction(payload));
  };
  const changeRoom = (payload) => {
    dispatch(changeRoomAction(payload));
  };

  return { room, isLoading, addNewRoom, removeRoom, selectRoom, changeRoom };
};

export default useRooms;
