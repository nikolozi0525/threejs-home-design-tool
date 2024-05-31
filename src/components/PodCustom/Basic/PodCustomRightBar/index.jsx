import React, { useState, useEffect } from "react";
import Select from "react-select";

import BlackImg from "@/assets/img/1.png";
import ColorImg from "@/assets/img/2.png";
import AddPlusSvg from "@/assets/img/add-plus.svg";
import CloseSvg from "@/assets/img/close.svg";

import FurnitureListData from "@/consts/FurnitureInfo";
import RoomListData from "@/consts/RoomInfo";

import useRooms from "@/store/room/hooks/useRooms";

import "./styles.css";
import { Close } from "@mui/icons-material";

const PodCustomRightBar = ({ room }) => {
  const { changeRoom } = useRooms();

  const handleScroll = () => {
    document.getElementsByClassName("roomList")[0].scrollTop =
      document.getElementsByClassName("roomList")[0].scrollHeight;
  };

  const handleFurnitureFull = () => {
    changeRoom({ index: room.index, furniture: FurnitureListData });
  };
  const handleFurnitureNone = () => {
    changeRoom({ index: room.index, furniture: [] });
  };

  return (
    <div className="custom-bar">
      <p>Room Type:</p>
      <Select
        className="custom-bar-roomtype"
        options={RoomListData}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.name}
        onChange={(val) => {
          changeRoom({ ...room, ...val });
        }}
        value={{ ...room, name: room.room }}
        placeholder={<div>Room Type</div>}
      ></Select>
      <div>Please select the type of</div>
      <div>furnishing you would like</div>

      <div
        className="custom-bar-furnishing"
        style={
          room.furniture && room.furniture.length == FurnitureListData.length
            ? {
                backgroundColor: "#324646",
              }
            : {}
        }
        onClick={handleFurnitureFull}
      >
        <img src={BlackImg} alt="black" className="md:w-25 md:h-25" />
        <p>
          <strong>Fully Furnished</strong>
        </p>
      </div>
      <div
        className="custom-bar-furnishing"
        style={
          !room.furniture || room.furniture.length == 0
            ? {
                backgroundColor: "#324646",
              }
            : {}
        }
        onClick={handleFurnitureNone}
      >
        <img src={ColorImg} alt="color" className="md:w-25 md:h-25" />
        <p>
          <strong>No Furnishing</strong>
        </p>
      </div>
      <div className="custom-bar-appliances">
        <p>Additional Appliances:</p>
        {FurnitureListData.map((one) => {
          return (
            <div
              key={one.name}
              className="custom-bar-appliance"
              onClick={() => {
                if (room.furniture && room.furniture.includes(one)) {
                  changeRoom({
                    index: room.index,
                    furniture: room.furniture.filter(
                      (item) => item.name != one.name
                    ),
                  });
                } else {
                  changeRoom({
                    index: room.index,
                    furniture: [...room.furniture, one],
                  });
                }
              }}
            >
              {room.furniture && room.furniture.includes(one) ? (
                <img src={CloseSvg} alt="" />
              ) : (
                <img src={AddPlusSvg} alt="" />
              )}
              <span>
                <strong>{one.name}</strong>
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex w-full h-full justify-center">
        <a
          className="scroll shadow-[0_0_7px] flex justify-center"
          onClick={() => handleScroll()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="-3 -9 30 30"
            fill="none"
            stroke="blue"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
          {}
        </a>
      </div>
    </div>
  );
};

export default PodCustomRightBar;
