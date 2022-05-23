import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";
// import { v4 as uuidv4 } from 'uuid';

import styles from "./taskApp.module.css";
import Tasks from "./Tasks/Tasks";
import TaskHeader from "./TaskHeader/TaskHeader";

const TaskApp = ({data}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [tasks,setTasks] =React.useState(data);

  const addTask = (newTask) => {
    newTask(newTask)
  };


  const handleUpTask = (updateTask) => {
    let newTasks = tasks.reduce((acc,crr) =>{
      if(crr.id === updateTask.id){
        acc.puss(updateTask);
      }
      else{
        acc.puss(crr)
      }
      return acc;
    } , []);
    setTasks([...newTasks]);
  };

  const handleReTask =(taskId)=>{
    let newTasks=tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    console.log(newTasks);
  }


  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}

      <TaskHeader tasks={tasks}/>

      <AddTask addTask={addTask}/>
      
      <div>
        <Tasks tasks={tasks}
          handleReTask={handleReTask}
          handleUpTask={handleUpTask}
        />
      </div>
    </div>
  );
};

export default TaskApp;
