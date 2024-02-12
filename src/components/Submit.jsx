import React from "react";
import MultipleSelect from "../components/DropDown";
import Input from "../Form/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Submit = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ width: "40%" }}>
      <MultipleSelect placeholder="Select from available addresses" />
      <div className="flex items-center">
        <p className="p-4 pl-7 pr-7 bg-blue-800 rounded-l-md text-white">To</p>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Address"
          className="text-gray-500 p-4 rounded-r-md"
          style={{ width: "100%" }}
        />
      </div>

      <div className="flex items-center">
        <p className="p-4  bg-blue-800 rounded-l-md text-white">Amount</p>

        <div style={{ width: "60%" , }} className="border-0 rounded-none">
          <FormControl sx={{ m: 0, minWidth: "100%" }} className=" "  >
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              className="bg-white  rounded-r-md"
              style={{border:"transparent" , borderRadius:"0 " ,borderTopRightRadius:"10px", borderBottomRightRadius:"10px"}}
            >
              <MenuItem value="">
                
              </MenuItem>
              <MenuItem value={10} className=" text-gray-400">
                Ten
              </MenuItem>
              <MenuItem value={20} className=" text-gray-400">
                Twenty
              </MenuItem>
              <MenuItem value={30} className=" text-gray-400">
                Thirty
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Submit;
