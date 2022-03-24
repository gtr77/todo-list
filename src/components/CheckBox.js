import { React } from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'checkbox' } };

const CheckBoxComponent = ({ completed, currentIndex, toggle }) => {
  return (
    <Checkbox {...label} 
      defaultChecked={completed}
      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      className='todolist__checktask'
      onChange={() => toggle(currentIndex)} />
  );
}

export default CheckBoxComponent;