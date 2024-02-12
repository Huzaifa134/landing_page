import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import WashOutlinedIcon from '@mui/icons-material/WashOutlined';
export default function Input({width,placeholder}) {
  return (
    <div
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      className='bg-transparent flex border-2 rounded border-gray-300 '
      style={{width:`${width}`}}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <WashOutlinedIcon />
      </IconButton>
      
      <input type="text" name="text" id="text"  sx={{ ml: 1, flex: 1 }}
      placeholder={`${placeholder}`}
      inputProps={{ 'aria-label': 'search google maps' }}
      style={{width:"90%",backgroundColor:"transparent"}}
      className='focus:outline-none'/>
    </div>
  );
}
