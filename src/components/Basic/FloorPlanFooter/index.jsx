import React from "react";

import "./styles.css";

const FloorPlanFooter = ({ rooms, total }) => {
  return (
    <div className="floorplan-footer mt-2">
      <div>Total: ${total}</div>
      <div>{rooms.length} Pods</div>
      <div>Step: 1/4</div>
    </div>
  );
};

export default FloorPlanFooter;
