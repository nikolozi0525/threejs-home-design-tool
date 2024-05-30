import React from "react";
import "./styles.css";

const RoomHexagonGrid = () => {
  return (
    <div className="room-grid">
      <div className="container">
        {Array(400)
          .fill(0)
          .map((_, index) => (
            <div className="hexagon" key={index}>
              {/* <>
                  <span className={`inner`}></span>
                  <div className="line"></div>
                </> */}
              <span className={`inner`}></span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RoomHexagonGrid;
