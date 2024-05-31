import { useState } from "react";

import { useStateValue } from "../../index";
import { addRoom, removeRoom as removeRoomAction } from "../actions";

const useRooms = () => {
  const [{ room }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const addNewRoom = (payload) => {
    dispatch(addRoom(payload));
  };

  const removeRoom = (payload) => {
    dispatch(removeRoomAction(payload));
  };

  return { room, isLoading, addNewRoom, removeRoom };
};

export default useRooms;
