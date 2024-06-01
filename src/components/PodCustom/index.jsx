import React from "react";
// import { fadeIn } from "../utils/motion";
// import { TypeAnimation } from "react-type-animation";

import useRooms from "@/store/room/hooks/useRooms";

import PodCustomRightBar from "./Basic/PodCustomRightBar";
import RoomFloorPlan from "./Basic/RoomFloorPlan";
import FloorPlanCustomFooter from "./Basic/FloorPlanCustomFooter";

import "./styles.css";

const PodCustom = () => {
  const {
    room: { rooms, total, customRoom },
  } = useRooms();

  return (
    <div className="grid grid-cols-12 bg-[#ebebeb]">
      <div className="xs:col-span-12 sm:col-span-12 md:col-span-8 flex flex-col px-5 pt-5">
        <RoomFloorPlan />
        <FloorPlanCustomFooter room={customRoom} />
      </div>
      <div
        className="roomList xs:col-span-12 sm:col-span-12 md:col-span-4 w-full overflow-auto"
        style={{ height: "97vh" }}
      >
        <PodCustomRightBar room={customRoom} />
      </div>
    </div>
  );
};

export default PodCustom;
