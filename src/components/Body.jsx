import React, { useState, useEffect } from "react";
// import { fadeIn } from "../utils/motion";
// import { TypeAnimation } from "react-type-animation";
import RoomSelection from "./Basic/RoomSelection";
import RoomHexagonGrid from "./Basic/RoomHexagonGrid";
import FloorPlanFooter from "./Basic/FloorPlanFooter";

const Body = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="sm:col-span-9 flex flex-col px-5 pt-5">
        <RoomHexagonGrid />
        <FloorPlanFooter />
      </div>
      <div
        className="roomList sm:col-span-3 w-full overflow-auto"
        style={{ height: "97vh" }}
      >
        <RoomSelection />
      </div>
    </div>
  );
};

export default Body;
