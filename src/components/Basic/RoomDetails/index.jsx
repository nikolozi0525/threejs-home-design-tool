import React from "react";
import { Box } from "@mui/material";
import { space } from "postcss/lib/list";
import styled from "@emotion/styled";

const RoomDetails = ({}) => {
  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div class="mx-auto max-w-md">
          <h6>Room Type: </h6>
          <div>
            <h2 class="text-3xl font-bold w-full">Bathroom</h2>
            <p class="text-gray-400">
              Please select the type of furnishing you would like
            </p>
          </div>

          <div class="divide-y divide-gray-300/50">
            <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
              <ul class="space-y-4">
                <li class="flex items-center border-gray-300 border rounded-xl shadow-[0_0_2px] p-3">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">No Furnishings</p>
                </li>
                <li class="flex items-center border-gray-300 border rounded-xl shadow-[0_0_2px] p-3">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">Fully Furnished</p>
                </li>
              </ul>
              <div>
                <p class="text-gray-400">Additional Appliances:</p>
                <ul class="space-y-4">
                  <li class="flex items-center border-gray-300 rounded-xl bg-gray-100 p-1">
                    <svg
                      class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p class="ml-4">Bidet</p>
                  </li>
                  <li class="flex items-center border-gray-300 rounded-xl bg-gray-100 p-1">
                    <svg
                      class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p class="ml-4">Carpet Flooring</p>
                  </li>
                  <li class="flex items-center border-gray-300 rounded-xl bg-black text-gray-100 p-1">
                    <svg
                      class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p class="ml-4">Central Air Conditioning</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
