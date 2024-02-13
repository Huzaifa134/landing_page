import React from "react";
import Form from "../Form/Input.tsx";
import Button from "@mui/material/Button";
import Submit from "./Submit.tsx";
import EventsComponent from "./Events.tsx";
import IconButton from "@mui/material/IconButton";
import WashOutlinedIcon from "@mui/icons-material/WashOutlined";
const Transfer = () => {
  return (
    <div
      className="sm:flex sm:flex-wrap sm:justify-center sm:gap-x-6 sm:items-center "
      style={{ margin: "0 auto" }}
    >
      <div className="flex flex-col gap-y-4 sm:ml-2   sm:w-[40%]">
        <h1 className="font-bold text-2xl self-start  ">Transfer</h1>
        <div
          style={{ padding: "2px 4px", display: "flex", alignItems: "center" }}
          className={`bg-white flex border-2 rounded border-gray-300 mb-3 w-[60%] sm:w-[40%] `}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <WashOutlinedIcon />
          </IconButton>

          <input
            type="text"
            name="text"
            id="text"
            placeholder="1 unit = 100000000 "
            aria-label="search google maps"
            style={{ backgroundColor: "transparent" }}
            className="focus:outline-none   sm:w-[90%]"
          />
        </div>
        <div>
          <Submit />
        </div>
      </div>
      <div className="flex flex-col sm:justify-center sm:items-center gap-y-5">
        <h1 className="font-bold text-2xl self-start ml-4">Upgrade Runtime</h1>
        <div className="flex">
          <p className="p-2 pt-3  bg-[#d33079] rounded-l-md text-white max-[620px]:p-1 max-[620px]:text-xs max-[620px]:pt-3">
            Wasm File
          </p>
          <button className="border-2 h-14 w-[60%] sm:w-[500px] border-gray-400 rounded-r-lg text-gray-500 bg-white ">
            <input
              type="file"
              name="file"
              id="file"
              className="text-gray-500"
            />
          </button>
        </div>
        <button className="ml-2 p-3 pl-8 border-2 pr-8 rounded-lg border-[#d33079] text-[#d33079] text-lg w-36">
          Submit
        </button>

        <EventsComponent />
      </div>
    </div>
  );
};
export default Transfer;
