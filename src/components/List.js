import React from 'react';
import Card from '../components/Card';

const List = ({ 
  tasks, 
  status,
  statuses, 
  children, 
  deleteTask, 
  changeTaskStatus 
}) => (
  <div className={`list ${status.toLowerCase()}-list`}>
    <h5>{children} <span>{tasks.length}</span></h5>

    {tasks.map((task) =>
      <Card
        key={task._id}
        id={task._id}
        text={task.text}
        status={status}
        statuses={statuses}
        executor={task.executor}
        deleteTask={deleteTask}
        changeTaskStatus={changeTaskStatus}
      />
    )}

  </div>
);

export default List;
