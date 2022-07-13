import { useState } from "react";

const ShowTasks = ({ id, task, day, isDone, changeIsDone }) => {
  // console.log(isDone);
  return (
    <div className="task"  onClick={()=>changeIsDone(id)}>
      {/* <p>{id}</p> */}
    
      <h1 style={isDone ? {color:'red'}:{color:'green'}}>{task}</h1>
      <h3>{isDone.toString()}</h3>
    </div>
  );
};

export default ShowTasks;

