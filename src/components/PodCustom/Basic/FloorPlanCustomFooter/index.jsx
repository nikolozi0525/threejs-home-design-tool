import React, { useEffect } from "react";

import "./styles.css";

const FloorPlanFooter = ({ room }) => {
  const { name, price, furniture = [] } = room;

  const totalPrice =
    furniture.length && furniture.reduce((total, one) => total + one.price, 0);
  return (
    <div className="floorplan-footer mt-2">
      <div>Total: ${totalPrice}</div>
      <div>Pod Cost: ${price}</div>
      <div>Pod Type: {name}</div>
      <div>Step: 2/4</div>
    </div>
  );
};

export default FloorPlanFooter;
