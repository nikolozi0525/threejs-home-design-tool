import React, { useState, useEffect } from "react";
import Compass from "../Compass";
import roomListData from "@/consts/RoomInfo";

import useRooms from "@/store/room/hooks/useRooms";

import "./styles.css";

const RoomHexagonGrid = () => {
  const {
    room: { rooms },
    selectRoom,
  } = useRooms();

  const [angle, setAngle] = useState(0);

  const setAngleContainer = (value) => {
    setAngle(value);
  };

  const onSelect = (index) => {
    const selectedData = rooms.find((one) => one.index == index);
    selectRoom(selectedData);
  };

  return (
    <div className="room-floorplan">
      <Compass callback={setAngleContainer} />
      <div className="room-floorplan-container" style={{ overflowX: "scroll" }}>
        <div
          className="custom-hexagonContent"
          style={{ transform: `rotate(${angle}deg)`, width: "1340px" }}
        >
          {Array(400)
            .fill(0)
            .map((_, index) => {
              const existRoomData = rooms.find((one) => {
                return one.index == index;
              });
              return (
                <div
                  className={`custom-hexagon`}
                  key={index}
                  style={
                    existRoomData
                      ? {
                          backgroundColor: "black",
                        }
                      : {}
                  }
                  // onMouseOver={(ev) => {
                  //   if (existRoomData) {
                  //     ev.target.style.backgroundColor = "lightgreen";
                  //   }
                  // }}
                  // onMouseLeave={(ev) => {
                  //   ev.target.style.backgroundColor = "#ebebeb";
                  // }}
                  onClick={(ev) => onSelect(index)}
                >
                  {/* <>
                    

<span className={`inner`}></span>
                    <div className="line"></div>
                  </> */}

                  <span
                    id={`grid-inner-${index}`}
                    className={`custom-inner `}
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
    </div>
  );
};

export default RoomHexagonGrid;
