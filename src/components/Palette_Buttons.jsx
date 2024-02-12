import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MultipleSelect from '../components/DropDown'

export default function RowRadioButtonsGroup() {
  return (
    <div  className="w-[45%] ml-20 mt-10 flex flex-col justify-center gap-y-4 max-[1268px]:w-[60%] max-[1268px]:m-auto max-[835px]:w-[95%] max-[835px]:ml-0">
    <FormControl>
      <h1 className='mb-8 font-bold text-xl'>Pallet Interactor</h1>
      
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <div className='flex justify-center items-center'>
        <div className='mr-3'>Interaction Type</div>
        <FormControlLabel value="Extrinsic" control={<Radio />} label="Extrinsic" />
        <FormControlLabel value="Query" control={<Radio />} label="Query" />
        <FormControlLabel value="RPC" control={<Radio />} label="RPC" />
        <FormControlLabel value="v" control={<Radio />} label="Constant" />
        </div>
        </RadioGroup>

      <MultipleSelect placeholder="Pallets / RPC"/>
      <MultipleSelect placeholder="Callables"/>
    </FormControl>
    </div>
  );
}