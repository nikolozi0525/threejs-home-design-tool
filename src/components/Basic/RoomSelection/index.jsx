import React, { useState } from "react";

import roomListData from "../RoomInfo";

import "./index.css";

const RoomSelection = ({}) => {
  const handleScroll = () => {
    document.getElementsByClassName("roomList")[0].scrollTop =
      document.getElementsByClassName("roomList")[0].scrollHeight;
  };

  return (
    <div className="relative flex overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative bg-white pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-5 text-base leading-7 text-gray-600">
              <ul className="roomList space-y-4">
                {roomListData.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center border-gray-300 border rounded-xl shadow-[0_0_2px] bg-gray-100 p-3"
                    draggable
                    onDragStart={(ev) => {
                      ev.dataTransfer.setData("selectedRoom", item.name);
                      ev.dataTransfer.setData("selectedRoomColor", item.color);
                    }}
                  >
                    <svg
                      className="h-2/5 w-2/5 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="400"
                      height="400"
                      viewBox="0 0 400 400"
                    >
                      <polygon
                        points="200,50 350,125 350,275 200,350 50,275 50,125"
                        fill={item.color || `#${Math.floor(Math.random())}`}
                        stroke="black"
                        stroke-width="2"
                      />
                    </svg>
                    <div className="ml-4 grow text-center">
                      <div>
                        <h3 className="font-bold w-full">{item.name}</h3>
                      </div>
                      <div className="px-3 position-relative">
                        <h3>{`$${item.price}`}</h3>
                      </div>
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
