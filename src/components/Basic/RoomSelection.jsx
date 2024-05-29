import React from "react";
import { Box } from "@mui/material";
import { space } from "postcss/lib/list";
import styled from "@emotion/styled";

const RoomSelection = ({}) => {
  return (
    <div class="relative flex min-h-screen overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div class="relative bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div class="mx-auto max-w-md">
          <div class="divide-y divide-gray-300/50">
            <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
              <ul class="space-y-4">
                <li class="flex items-center border-gray-300 border rounded-xl shadow-[0_0_2px] bg-gray-100 p-3">
                  <svg
                    class="h-2/5 w-2/5 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="400"
                    height="400"
                    viewBox="0 0 400 400"
                  >
                    <polygon
                      points="200,50 350,125 350,275 200,350 50,275 50,125"
                      fill="lightGreen"
                      stroke="black"
                      stroke-width="2"
                    />
                  </svg>
                  <div class="ml-4">
                    <div>
                      <p class="font-bold">Bedroom</p>
                    </div>
                    <div class="px-3 position-relative">
                      <p>$15,000</p>
                    </div>
                  </div>
                </li>
                <li class="flex items-center border-gray-300 border rounded-xl shadow-[0_0_2px] bg-gray-100 p-3">
                  <svg
                    class="h-2/5 w-2/5 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="400"
                    height="400"
                    viewBox="0 0 400 400"
                  >
                    <polygon
                      points="200,50 350,125 350,275 200,350 50,275 50,125"
                      fill="red"
                      stroke="black"
                      stroke-width="2"
                    />
                  </svg>
                  <div class="ml-4">
                    <div>
                      <p class="font-bold">Living Room</p>
                    </div>
                    <div class="px-3 position-relative">
                      <p>$15000</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSelection;
