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

  const onDragOver = (ev) => {
    ev.preventDefault();
    if (!ev.target.className.includes("drag-hover")) {
      ev.target.className += "drag-hover";
    }
  };

  const onDragLeave = (ev) => {
    ev.preventDefault();

    ev.target.className = ev.target.className.replace(/drag-hover/g, "");
  };

  const onDragStart = (ev, roomInfo) => {
    ev.dataTransfer.setData("selectedRoom", roomInfo.room);
    ev.dataTransfer.setData("selectedRoomColor", roomInfo.color);

    setRoomData(roomData.filter((one) => one.index != roomInfo.index));
    // ev.target.style.backgroundColor = `#fafafa71`;
  };

  const onDrop = (ev, index) => {
    ev.preventDefault();
    const selectedRoom = ev.dataTransfer.getData("selectedRoom");
    const selectedRoomColor = ev.dataTransfer.getData("selectedRoomColor");

    console.log("####", selectedRoom, selectedRoomColor);
    if (selectedRoom) {
      setRoomData([
        ...roomData,
        { index, room: selectedRoom, color: selectedRoomColor },
      ]);

      ev.target.style.backgroundColor = `${selectedRoomColor}`;
      ev.target.className = ev.target.className.replace(/drag-hover/g, "");
    } else {
      ev.target.className = ev.target.className.replace(/drag-hover/g, "");
    }
  };

  return (
    <div className="room-grid">
      <div className="container">
        {Array(400)
          .fill(0)
          .map((_, index) => {
            const existRoomData = roomData.find((one) => {
              return one.index == index;
            });
            return (
              <div
                className={`hexagon`}
                key={index}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDragStart={(ev) => onDragStart(ev, existRoomData)}
                onDrop={(ev) => onDrop(ev, index)}
                draggable
              >
                {/* <>
                    <span className={`inner`}></span>
                    <div className="line"></div>
                  </> */}

                <span
                  id={`grid-inner-${index}`}
                  className={`inner `}
                  style={
                    existRoomData
                      ? {
                          backgroundColor: existRoomData.color,
                        }
                      : {}
                  }
                ></span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RoomHexagonGrid;
