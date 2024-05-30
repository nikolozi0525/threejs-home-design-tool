import { useState } from "react";

import { useStateValue } from "../../index";
import { addRoom } from "../actions";

const useRooms = () => {
  const [{ room }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const addNewRoom = (payload) => {
    dispatch(addRoom(payload));
  };

  return [room, isLoading, addNewRoom];
};

export default useRooms;
