import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import WashOutlinedIcon from "@mui/icons-material/WashOutlined";
export default function Input({ width, placeholder, bgcolor, active }) {
  return (
    <div
      style={{
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: `${width}`,
      }}
      className={`bg-${bgcolor} flex border-2 rounded border-gray-300 mb-3 `}
    >
      {active ? (
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <WashOutlinedIcon />
        </IconButton>
      ) : (
        ""
      )}
      <input
        type="text"
        name="text"
        id="text"
        placeholder={`${placeholder}`}
        aria-label="search google maps"
        style={{ width: "90%", backgroundColor: "transparent" }}
        className="focus:outline-none"
      />
    </div>
  );
}
