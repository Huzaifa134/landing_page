import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MultipleSelect from "./DropDown.tsx";

export default function RowRadioButtonsGroup() {
  return (
    <div className="w-[45%] ml-28 mt-10 flex flex-col justify-center gap-y-4 max-[1268px]:w-[60%] max-[1268px]:m-auto max-[835px]:w-[95%] max-[835px]:ml-0">
      <FormControl>
        <h1 className=" text-[#3f3f3f] mb-8 font-bold text-3xl ml-4">
          Pallet Interactor
        </h1>

        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          className="text-[#555555] ml-4 mb-4 flex flex-wrap"
        >
          <div className=" flex justify-center flex-wrap items-center">
            <div className="mr-3">Interaction Type</div>
            <FormControlLabel
              value="Extrinsic"
              control={<Radio />}
              label="Extrinsic"
            />
            <FormControlLabel value="Query" control={<Radio />} label="Query" />
            <FormControlLabel value="RPC" control={<Radio />} label="RPC" />
            <FormControlLabel value="v" control={<Radio />} label="Constant" />
          </div>
        </RadioGroup>

        <MultipleSelect placeholder="Pallets / RPC" />
        <MultipleSelect placeholder="Callables" />

        <div className="flex items-center flex-wrap gap-y-5">
          <button className="ml-2  p-3 pl-5 pr-5 rounded-lg bg-[#d33079] text-white text-lg w-36 max-[564px]:p-2 max-[565px]:pl-3 max-[565px]:pr-3">
            Submit
          </button>

          <p className="m-2">or</p>
          <button className="ml-2 p-2 pl-5  border-2 pr-5 rounded-lg border-[#d33079] text-[#d33079] text-lg w-36">
            Signed
          </button>
          <p className="m-2">or</p>
          <button className="ml-2 p-2  pl-5 border-2 pr-5 rounded-lg border-[#d33079] text-[#d33079]text-lg w-36">
            Sudo
          </button>
        </div>
      </FormControl>
    </div>
  );
}
