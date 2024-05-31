import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const FloorPlanFooter = ({ rooms, total }) => {
  return (
    <div className="floorplan-footer mt-2">
      <div>Total: ${total}</div>
      <div>{rooms.length} Pods</div>
      <div>
        <Link to={"/2d-custom"}>Step: 1/4</Link>
      </div>
    </div>
  );
};

export default FloorPlanFooter;
