import React from "react";
import Box from "../Box/BasicCard";
import Table from "../../src/Table/Balance_table";
import Form from "../Form/Input";
import Button from "@mui/material/Button";
import Submit from "../components/Submit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Pallet from "../components/Pallet_buttons";
import Transfer from "../components/Transfer";


const Page = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <div>
      <div
        className="flex w-[100%]  items-center  lg:w-[87%] max-[409px]:w-[100%] "
        style={{
          justifyContent: "space-between",
          
          margin: "30px auto",
        }}
      >
        <img
          src="https://substrate-developer-hub.github.io/substrate-front-end-template/assets/substrate-logo.png"
          alt="Polkadot"
          height={30}
          width={30}
        />
        <div className="flex justify-center items-center gap-x-5">
          <p className="text-[#555555]">
            create an account with Polkadot-JS Extension{" "}
            <span className="text-[#d33079]">(chrome , Firefox)</span>
          </p>
         
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            height="1em"
            width="1em"
            style={{ height: "20px", width: "20px" }}
          >
            <path d="M4 8a6 6 0 014.03-5.67 2 2 0 113.95 0A6 6 0 0116 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 11-4 0h4z" />
          </svg>

         
          <svg
            viewBox="0 0 64 64"
            fill="currentColor"
            height="1em"
            width="1em"
            style={{ height: "30px", width: "30px" }}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeMiterlimit={10}
              strokeWidth={2}
              d="M12 21h40M12 33h40M12 45h40"
            />
          </svg>

          <div className="flex justify-center items-center gap-x-3 border-2 p-1 rounded-3xl border-gray-300 pl-3 pr-3">
            <p className="text-[#555555] text-xs lg:text-sm">Hi, Aaron Coper </p>

            
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2m0 6.39A9.973 9.973 0 0017.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8-3 0-5.61-1.66-7-4.11L6.75 14v-1A1.25 1.25 0 018 11.75 1.25 1.25 0 019.25 13v1H12m4-2.25A1.25 1.25 0 0014.75 13 1.25 1.25 0 0016 14.25 1.25 1.25 0 0017.25 13 1.25 1.25 0 0016 11.75z" />
            </svg>
          </div>
        </div>
      </div>
      <Box />

      <Table />

      
<Transfer/>
      

          <div  className="mb-5">
          
          
          <Pallet />
          
          </div>
          </div>
  );
  
  
};

export default Page;