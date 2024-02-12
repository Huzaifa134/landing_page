import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels({placeholder}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='mb-5'>
          
          <FormControl sx={{ m: 0, minWidth: "99%" }} >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className='bg-white text-gray-400'
        >
          <MenuItem value="">
            <p className='text-gray-400'>{placeholder}</p>
          </MenuItem>
          <MenuItem value={10} className=' text-gray-400'>Ten</MenuItem>
          <MenuItem value={20} className=' text-gray-400'>Twenty</MenuItem>
          <MenuItem value={30} className=' text-gray-400'>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
