import React, { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import useRooms from "@/store/room/hooks/useRooms";
import Compass from "../Compass";

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
        <TransformWrapper
          initialScale={4}
          maxScale={8}
          minScale={1.1}
          initialPositionX={-1500}
          initialPositionY={-1000}
        >
          <TransformComponent>
            <div
              className="custom-hexagonContent"
              style={{ transform: `rotate(${angle}deg)`, width: "2000px" }}
            >
              {Array(5000)
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
                            ? { backgroundColor: "orange" }
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
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};

export default RoomHexagonGrid;
