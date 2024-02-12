import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MultipleSelect from '../components/DropDown'

export default function RowRadioButtonsGroup() {
  return (
    <div  className="w-[45%] ml-28 mt-10 flex flex-col justify-center gap-y-4 max-[1268px]:w-[60%] max-[1268px]:m-auto max-[835px]:w-[95%] max-[835px]:ml-0">
    <FormControl >
      <h1 className='mb-8 font-bold text-3xl ml-4'>Pallet Interactor</h1>
      
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className='ml-4 flex flex-wrap'
      >
        <div className='flex justify-center flex-wrap items-center'>
        <div className='mr-3'>Interaction Type</div>
        <FormControlLabel value="Extrinsic" control={<Radio />} label="Extrinsic" />
        <FormControlLabel value="Query" control={<Radio />} label="Query" />
        <FormControlLabel value="RPC" control={<Radio />} label="RPC" />
        <FormControlLabel value="v" control={<Radio />} label="Constant" />
        </div>
        </RadioGroup>

      <MultipleSelect placeholder="Pallets / RPC"/>
      <MultipleSelect placeholder="Callables"/>

      <div className='flex items-center flex-wrap'>
      <button variant="contained" href="#" className="ml-2 p-4 pl-10 pr-10 rounded-lg bg-blue-600 text-white text-lg w-36 max-[565px]:p-2 max-[565px]:pl-5 max-[565px]:pr-5">Submit</button>
      <p className='m-2'>or</p>
      <button
      variant="contained"
      href="#"
      className="ml-2 p-3 pl-8 border-2 pr-8 rounded-lg border-blue-600 text-blue-600 text-lg w-36"
      >
      Signed
      </button>
      <p className='m-2'>or</p>
      <button
      variant="contained"
      href="#"
      className="ml-2 p-3 pl-8 border-2 pr-8 rounded-lg border-blue-600 text-blue-600 text-lg w-36"
      >
      Sudo
      </button>
      </div>
    </FormControl>
    </div>
  );
}