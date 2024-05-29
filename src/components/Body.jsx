// import { motion } from "framer-motion";
// import { fadeIn } from "../utils/motion";
// import { TypeAnimation } from "react-type-animation";
import RoomDetails from "./Basic/RoomDetails";

const Body = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="sm:col-span-9 bg-gray-200"></div>
      <div className="sm:col-span-3 w-full">
        <RoomDetails />
      </div>
    </div>
  );
};

export default Body;
