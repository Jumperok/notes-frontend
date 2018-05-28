import React from 'react';
import List from '../containers/ListContainer';

const Board = ({statuses}) => (
    <div className="project-board">
        <List 
          status={statuses[0]}
          statuses={statuses}
        >
            Todo tasks
        </List>
        <List 
          status={statuses[1]}
          statuses={statuses}
        >
            Doing tasks
        </List>
        <List 
          status={statuses[2]}
          statuses={statuses}
        >
            Done tasks
        </List>
    </div>
);

export default Board;
