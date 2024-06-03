import React, { useState } from "react";

import roomListData from "@/consts/RoomInfo";

import "./index.css";

const RoomSelection = ({}) => {
  const handleScroll = () => {
    document.getElementsByClassName("roomList")[0].scrollTop =
      document.getElementsByClassName("roomList")[0].scrollHeight;
  };

  return (
    <div className="relative flex overflow-hidden">
      <div
        className="relative pb-8  sm:max-w-lg sm:rounded-lg sm:px-5 m-auto"
        style={{ width: "90%" }}
      >
        <div className="mx-auto max-w-md">
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-5 text-base leading-7 text-gray-600">
              <ul className="roomList grid grid-cols-2 gap-5">
                {roomListData.map((item, index) => (
                  <li
                    key={index}
                    className="items-center flex flex-col text-center border rounded-xl shadow-[0_0_2px] bg-gray-100 p-1"
                    draggable
                    onDragStart={(ev) => {
                      ev.dataTransfer.setData("selectedRoom", item.name);
                      ev.dataTransfer.setData("selectedRoomColor", item.color);
                    }}
                  >
                    <svg
                      className=" h-auto flex-none fill-sky-100 stroke-sky-500 stroke-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="400"
                      height="400"
                      viewBox="0 0 400 400"
                      style={{ width: "70%" }}
                    >
                      <polygon
                        points="200,50 350,125 350,275 200,350 50,275 50,125"
                        fill={item.color || `#${Math.floor(Math.random())}`}
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="grow text-center">
                      <h3 className="font-bold w-full">{item.name}</h3>
                      <h3>{`$${item.price}`}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoomSelection;
