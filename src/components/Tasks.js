import { React } from 'react';
// import { DeleteForeverTwoToneIcon, ModeEditOutlineTwoToneIcon, BeenhereTwoToneIcon } from '@mui/icons-material';
import BeenhereTwoToneIcon from '@mui/icons-material/BeenhereTwoTone';
// import  from '@mui/icons-material/AddCircle';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
// import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';




const TasksComponent = ({ remove, edit, save, currentIndex }) => {
  return (
    <div className='todolist__buttons'>
      <button className='todolist__buttons btn btn--remove' onClick={() => remove(currentIndex)}>
        <DeleteForeverTwoToneIcon color="primary" sx={{ fontSize: 18 }} />
      </button>
      <button className='todolist__buttons btn btn--edit' onClick={() => edit(currentIndex)}>
        <ModeEditOutlineTwoToneIcon color="primary" sx={{ fontSize: 18 }}/>
      </button>
      <button className='todolist__buttons btn btn--save' onClick={() => save(currentIndex)}>
        <BeenhereTwoToneIcon color="primary" sx={{ fontSize: 18 }}/>
      </button>
    </div>
  )
}

export default TasksComponent;