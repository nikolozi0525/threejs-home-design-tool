// import { motion } from "framer-motion";
// import { fadeIn } from "../utils/motion";
// import { TypeAnimation } from "react-type-animation";
import RoomDetails from "./Basic/RoomDetails";
import RoomSelection from "./Basic/RoomSelection";

const Body = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-8/12"></div>
      <div className="w-full sm:w-4/12">
        <RoomSelection />
      </div>
    </div>
  );
};

export default Body;
