import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const FloorPlanFooter = ({ room }) => {
  const { name, room: roomName, price, furniture = [] } = room;

  const totalPrice =
    Number(price) +
    Number(
      furniture.length
        ? furniture.reduce((total, one) => total + one.price, 0)
        : 0
    );
  return (
    <div className="floorplan-footer mt-2">
      <div>Total: ${totalPrice}</div>
      <div>Pod Cost: ${price}</div>
      <div>Pod Type: {name || roomName}</div>
      <div>
        <Link to={"/"}>Step: 2/4</Link>
      </div>
    </div>
  );
};

export default FloorPlanFooter;
