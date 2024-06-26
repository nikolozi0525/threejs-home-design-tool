import React, { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Compass from "../Compass";
import roomListData from "@/consts/RoomInfo";

import useRooms from "@/store/room/hooks/useRooms";

import "./styles.css";

const RoomHexagonGrid = () => {
  const {
    room: { rooms },
    addNewRoom,
    removeRoom,
  } = useRooms();

  const [angle, setAngle] = useState(0);
  const [isMovable, setIsMovable] = useState(false);

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
    setIsMovable(true);
    if (roomInfo) {
      ev.dataTransfer.setData("selectedRoom", roomInfo.room);
      ev.dataTransfer.setData("selectedRoomColor", roomInfo.color);

      const selectedRoomPrice = roomListData.find(
        (one) => one.name == roomInfo.room
      ).price;

      removeRoom({ ...roomInfo, price: selectedRoomPrice });
    }
  };

  const onDrop = (ev, index) => {
    setIsMovable(false);

    ev.preventDefault();
    const selectedRoom = ev.dataTransfer.getData("selectedRoom");

    const existRoomInfo = rooms.find((one) => one.index == index);

    if (selectedRoom) {
      const selectedRoomColor = ev.dataTransfer.getData("selectedRoomColor");
      const selectedRoomPrice = roomListData.find(
        (one) => one.name == selectedRoom
      ).price;
      let newRoomData = [...rooms];
      if (existRoomInfo) {
        newRoomData = newRoomData.filter(
          (one) => one.index != existRoomInfo.index
        );

        const existRoomPrice = roomListData.find(
          (one) => one.name == existRoomInfo.room
        ).price;
        removeRoom({ ...existRoomInfo, price: existRoomPrice });
      }
      addNewRoom({
        index,
        room: selectedRoom,
        color: selectedRoomColor,
        price: selectedRoomPrice,
      });

      ev.target.style.backgroundColor = `${selectedRoomColor}`;
      ev.target.className = ev.target.className.replace(/drag-hover/g, "");
    } else {
      ev.target.className = ev.target.className.replace(/drag-hover/g, "");
    }
  };

  const setAngleContainer = (value) => {
    setAngle(value);
  };

  return (
    <div className="room-grid ">
      <Compass callback={setAngleContainer} />
      <div
        className="container-other sm:m-auto xs:m-auto"
        style={{ overflowX: "scroll" }}
      >
        <TransformWrapper
          initialScale={4}
          maxScale={8}
          minScale={1.5}
          disabled={isMovable}
          initialPositionX={-1350}
          initialPositionY={-750}
        >
          <TransformComponent>
            <div
              className="hexagonContent"
              style={{ transform: `rotate(${angle}deg)`, width: "1400px" }}
            >
              {Array(1935)
                .fill(0)
                .map((_, index) => {
                  const existRoomData = rooms.find((one) => {
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
                      onMouseDown={() => {
                        setIsMovable(true);
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
                          existRoomData
                            ? {
                                backgroundColor: existRoomData.color,
                              }
                            : {}
                        }
                        onMouseDown={() => {
                          setIsMovable(true);
                          console.log("99999", index);
                        }}
                        onMouseUp={() => {
                          setIsMovable(false);
                        }}
                      ></span>
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
