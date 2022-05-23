import React from "react";
import Task from "../Task/Task";
// import styles from "./tasks.module.css";



const Tasks = ({tasks, handleUpTask, handleReTask }) => {
  // NOTE: do not delete `data-cy` key value pair
  if(tasks.length > 0){
    return (
      <ul>
        {tasks.map((task) => (
          <Task
            handleUpTask={handleUpTask}
            handleReTask={handleReTask}
          />
        ) )}
      </ul>
    )
  }
  // return (
  //   <>
  //     <ul data-cy="tasks" className={styles.tasks}>
        
  //     </ul>
  //     <div data-cy="tasks-empty" className={styles.empty}>
       
  //     </div>
  //   </>
  // );
};

export default Tasks;
