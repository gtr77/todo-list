import { React } from 'react'



const TasksComponent = ({ remove, edit, save, currentIndex }) => {
  return (
    <div className='todolist__buttons'>
      <button className='todolist__buttons btn btn--remove' onClick={() => remove(currentIndex)}>Remove</button>
      <button className='todolist__buttons btn btn--edit' onClick={() => edit(currentIndex)}>Edit</button>
      <button className='todolist__buttons btn btn--save' onClick={() => save(currentIndex)}>Save</button>
    </div>
  )
}

export default TasksComponent;