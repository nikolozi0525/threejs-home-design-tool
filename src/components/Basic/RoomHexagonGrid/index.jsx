import React, { useState, useEffect } from "react";

import roomListData from "../RoomInfo";

import "./styles.css";

const RoomHexagonGrid = () => {
  const [roomData, setRoomData] = useState([
    { index: 25, room: "Dinnig Room", color: "#D1C2F9" },
    { index: 33, room: "Living Room", color: "#EAB8B8" },
    { index: 32, room: "Dinnig Room", color: "#D1C2F9" },
    { index: 26, room: "Single Bathroom", color: "#D6FEBD" },
    { index: 34, room: "Double Bathroom", color: "#EAB8B8" },
  ]); // {index: hexagon_id, room: room_name, color: room_color }

  return (
    <div className="room-grid">
      <div className="container">
        {Array(400)
          .fill(0)
          .map((_, index) => (
            <div
              className={`hexagon`}
              key={index}
              onDragOver={(ev) => {
                ev.preventDefault();
                if (!ev.target.className.includes("drag-hover")) {
                  ev.target.className += "drag-hover";
                }
              }}
              onDragLeave={(ev) => {
                ev.preventDefault();
                ev.target.className = ev.target.className.replace(
                  /drag-hover/g,
                  ""
                );
              }}
              onDrop={(ev) => {
                ev.preventDefault();
                const selectedRoom = ev.dataTransfer.getData("selectedRoom");
                const selectedRoomColor =
                  ev.dataTransfer.getData("selectedRoomColor");

                setRoomData([
                  ...roomData,
                  { index, room: selectedRoom, color: selectedRoomColor },
                ]);

                ev.target.style.backgroundColor = `${selectedRoomColor}`;
              }}
            >
              {/* <>
                  <span className={`inner`}></span>
                  <div className="line"></div>
                </> */}

              <span
                id={`grid-inner-${index}`}
                className={`inner `}
                style={
                  roomData.find((one) => {
                    return one.index == index;
                  })
                    ? {
                        backgroundColor: roomData.find(
                          (one) => one.index == index
                        ).color,
                      }
                    : {}
                }
              ></span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RoomHexagonGrid;
