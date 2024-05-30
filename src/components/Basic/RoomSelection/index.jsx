import React, { useState } from "react";
import { space } from "postcss/lib/list";
import styled from "@emotion/styled";
import "./index.css";

const roomListData = [
  "Bedroom",
  "Living Room",
  "Bathroom",
  "Kitchen",
  "Kid's Bedroom",
  "Dinnig Room",
  "Single Bathroom",
  "Double Bathroom",
  "Bath/Closet",
  "Gym",
  "Music Room",
  "Office",
  "Workshop",
  "Theartre",
  "Storage",
  "Game Room",
  "Empty",
];

const RoomSelection = ({}) => {
  const handleScroll = () => {
    window.scrollTo({
      top: document.getElementById("listContainer").scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <ul id="listContainer" className="roomList space-y-4">
                {roomListData.map((item) => (
                  <li className="flex items-center border-gray-300 border rounded-xl shadow-[0_0_2px] bg-gray-100 p-3">
                    <svg
                      className="h-2/5 w-2/5 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="400"
                      height="400"
                      viewBox="0 0 400 400"
                    >
                      <polygon
                        points="200,50 350,125 350,275 200,350 50,275 50,125"
                        fill={`#${Math.floor(Math.random())}`}
                        stroke="black"
                        stroke-width="2"
                      />
                    </svg>
                    <div className="ml-4">
                      <div>
                        <p className="font-bold w-full">{item}</p>
                      </div>
                      <div className="px-3 position-relative">
                        <p>$15,000</p>
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
            onClick={() => handleScroll(50)}
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
