import React from 'react'
import Form from "../Form/Input";
import Button from "@mui/material/Button";
import Submit from "./Submit";
import EventsComponent from "../components/Events";
const Transfer = () => {
  return (
    <div>
    <div className="flex flex-col ">
        <div
          className="flex flex-wrap gap-x-6 items-center"
          style={{ justifyContent: "center", margin: "0 auto" }}
        >
          <div
            className="flex  flex-col gap-y-4 ml-2 max-[515px]:w-[100px] max-[1268px]:w-[100%] max-[1268px]:mb-10"
            
          >
            <h1 className="font-bold text-2xl self-start ">Transfer</h1>
            <Form
              width={"60%"}
              placeholder={"1 unit = 10000000000"}
              bgcolor={"transparent"}
              active={true}
              className="w-[60%]"
            />
            <Form
              width={"70%"}
              placeholder={
                "Transfer more than the existeencial ammount for account wiht 0 balance"
              }
              bgcolor={"transparent"}
              active={true}
            />
            <div>
            
            <Submit />
            </div>
          </div>
          <div
            className="flex w-[600px] flex-col justify-center items-center gap-y-5 max-[1268px]:w-[100%] max-[1268px]:mb-20"
        
          >
            <h1 className="font-bold text-2xl self-start ml-4">
              Upgrade Runtime
            </h1>
            <div className="flex">

              <p className="p-2 pt-3  bg-[#d33079] rounded-l-md text-white max-[620px]:p-1 max-[620px]:text-xs max-[620px]:pt-3">
                Wasm File
              </p>
              <button className="border-2 h-14 w-[500px] border-gray-400 rounded-r-lg text-gray-500 bg-white max-[620px]:w-[95%]">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="text-gray-500"
                />
              </button>
            </div>
            <button
              variant="contained"
              href="#"
              className="ml-2 p-3 pl-8 border-2 pr-8 rounded-lg border-[#d33079] text-[#d33079] text-lg w-36"
            >
              Submit
            </button>
            <div className="self-start">
            
            <EventsComponent/>
            </div>
          </div>
          </div>
          </div>
    
    </div>
  )
}

export default Transfer