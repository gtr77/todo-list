import { React, useState } from 'react'
import TasksComponent from "./components/Tasks";
import CheckBoxComponent from "./components/CheckBox";
// import Card from "./Card";
import './App.scss';


const App = () => {
  const [ text, setText ] = useState("");
  const [ updateTask, setUpdateTask ] = useState("");
  const [ showEditBtn, setEditBtn ] = useState(false);
  const [ tasks, setTasks ] = useState([]);

  const searchChange = (e) => {
    e.preventDefault();
    let getCurrentValue = e.target.value;
    setText(getCurrentValue)
  }
  const editChange = (e) => {
    e.preventDefault();
    let updatedTask = e.target.value;
    setUpdateTask(updatedTask)
  }
  const addTask = () => {
    let taskItem = {
      taskName : text ? text : "",
      completed: false,
      editable: false,
    };

    setTasks(prevState => [taskItem, ...prevState]);
    cleanInput()

  }
  const removeTask = (itemIdx) => {
    let newList = tasks.filter((x) => {
      return x !== tasks[itemIdx]
    })
    setTasks(newList);
  }
  const editTask = (idx) => {
    let tasksCopy = [...tasks];
    setEditBtn(true)
    tasksCopy[idx].editable = true;
    setTasks(tasksCopy);
  }
  const cleanInput = () => {
    setText("")
  }
  const toggleChange = (itemIndex) => {
    let newTasks = [...tasks];
    newTasks[itemIndex].completed = !newTasks[itemIndex].completed
    setTasks(newTasks);
  }

  const saveTask = (idx) => {
    let tasksCopy = [...tasks];
    tasksCopy[idx].editable = false;
    tasksCopy[idx].taskName = updateTask;
    setTasks(tasksCopy);
  }

  const style = {
    textDecoration: "line-through",
    color: "red"
  }
  const showItemStyles = {
    display: "block"
  };
  const hideItemStyles = {
    display: "none"
  };

  return (
    <div className="App">
      <div className='todolist'>
        <div className='todolist__title'>
          <h1>Todo List</h1>
        </div>
        <div className='todolist__container'>
          <input className='todolist__textbox' type="text" value={text} onChange={searchChange}/>
          <button className='todolist__btn' onClick={addTask}>Add Task</button>
        </div>
        <div className='todolist__taskscontainer'>
          <ul>
            {
              tasks.map((task,idx) => {
                const isCompleted = task.completed;
                const ShowEditableText = (
                  <input className='todolist__edititem' style={showEditBtn ? showItemStyles : hideItemStyles} type="text" onChange={editChange} defaultValue={task.taskName} />
                );
                const ItemTask = (
                  <li className='todolist__task' style={isCompleted ? style : null}> {task.taskName} <b>Status</b>: {isCompleted ? 'Done ' : 'To do '} </li>
                )

                return (
                  <div className='todolist__tasks'>
                    <CheckBoxComponent 
                      completed={isCompleted}
                      currentIndex={idx}
                      toggle={toggleChange}
                    />
                    { task.editable ? ShowEditableText : ItemTask }
                    <TasksComponent 
                      currentIndex={idx}
                      edit={editTask} 
                      save={saveTask} 
                      remove={removeTask}
                    />
                  </div>
                )  
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
