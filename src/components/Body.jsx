import React from "react";
// import { fadeIn } from "../utils/motion";
// import { TypeAnimation } from "react-type-animation";

import useRooms from "@/store/room/hooks/useRooms";

import RoomSelection from "./Basic/RoomSelection";
import RoomHexagonGrid from "./Basic/RoomHexagonGrid";
import FloorPlanFooter from "./Basic/FloorPlanFooter";

const Body = () => {
  const {
    room: { rooms, total },
  } = useRooms();
  return (
    <div className="grid grid-cols-12">
      <div className="sm:col-span-12 md:col-span-9 flex flex-col px-5 pt-5">
        <RoomHexagonGrid />
        <FloorPlanFooter rooms={rooms} total={total} />
      </div>
      <div
        className="roomList sm:col-span-12 md:col-span-3 w-full overflow-auto"
        style={{ height: "97vh" }}
      >
        <RoomSelection />
      </div>
    </div>
  );
};

export default Body;
