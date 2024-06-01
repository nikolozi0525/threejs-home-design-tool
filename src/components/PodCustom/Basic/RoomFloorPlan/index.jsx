import React, { useState, useEffect } from "react";
import Compass from "../Compass";
import roomListData from "@/consts/RoomInfo";

import useRooms from "@/store/room/hooks/useRooms";

import "./styles.css";

const RoomHexagonGrid = () => {
  const {
    room: { rooms, customRoom },
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
      <div
        className="room-floorplan-container sm:m-auto xs:m-auto"
        style={{ overflowX: "scroll" }}
      >
        <div
          className="custom-hexagonContent"
          style={{ transform: `rotate(${angle}deg)`, width: "2000px" }}
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
                      ? existRoomData.index == customRoom.index
                        ? { backgroundColor: "blue" }
                        : {
                            backgroundColor: "black",
                          }
                      : {}
                  }
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
                  {existRoomData && (
                    <span className="custom-hexagon-tooltip">
                      {existRoomData.room}
                    </span>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RoomHexagonGrid;
