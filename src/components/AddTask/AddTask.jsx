import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({addTask}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [newTask, setNewTask] = useState("");
  const handleAdd = () => {
    addTask(newTask);
    setNewTask("");
  }; 
  return (
    <div className={styles.todoForm}>

      <input data-cy="add-task-input" 
        type="text"
        value={newTask} 
        placeholder="Enter Our Task"
        onChange={({target}) => setNewTask(target.value)}
      />

      <button data-cy="add-task-button" onClick={handleAdd}> + </button>
    </div>
  );
};

export default AddTask;
