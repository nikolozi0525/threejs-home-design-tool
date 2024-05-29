// import { motion } from "framer-motion";
// import { fadeIn } from "../utils/motion";
// import { TypeAnimation } from "react-type-animation";
import RoomSelection from "./Basic/RoomSelection";
import RoomHexagonGrid from "./Basic/RoomHexagonGrid";
import FloorPlanFooter from "./Basic/FloorPlanFooter";

const Body = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="sm:col-span-9 bg-gray-200 flex flex-col px-5 pt-5">
        <RoomHexagonGrid />
        <FloorPlanFooter />
      </div>
      <div className="sm:col-span-3 w-full">
        <RoomSelection />
      </div>
    </div>
  );
};

export default Body;
