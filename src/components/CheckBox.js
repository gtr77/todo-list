import { React } from 'react';

const CheckBoxComponent = ({ completed, currentIndex, toggle }) => {
  return (
    <input className='todolist__checktask' type="checkbox" defaultChecked={completed} onChange={() => toggle(currentIndex)}/>
  );
}

export default CheckBoxComponent;