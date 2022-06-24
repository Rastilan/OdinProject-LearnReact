// Overview.js

import React from "react";

const Overview = (props) => {
  const { tasks } = props;
  let taskID = 0;

  return (
    <ul>
      {tasks.map((task) => {
        taskID++;
        return <li key={task.id}>{taskID + ": "}{task.text}</li>;
        
      })}
    </ul>
  );
};

export default Overview;