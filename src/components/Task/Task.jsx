import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({task,handleUpTask,handleReTask }) => {
  // NOTE: do not delete `data-cy` key value pair

  function status () {
    handleUpTask({...task})
  }

  const updateCount = (newCounts) => {
    if(newCounts >0){
      handleUpTask({...task})
    }
  }
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" onChange={status}/>
      <div data-cy="task-text"></div>
      {/* Counter here */}
      <Counter taskId = {task.id} count={task.count} updateCount={updateCount}/>
      <button data-cy="task-remove-button" onClick={handleReTask}>Delete</button>
    </li>
  );
};

export default Task;
