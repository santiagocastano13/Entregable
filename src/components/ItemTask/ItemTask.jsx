import React from 'react';
import './ItemTask.css';

export const ItemTask = ({ taskName, description, done }) => {
  return (
    <div className="task">
      <div>
        <li>{taskName} {description}</li>
      </div>
    </div>
  );
};
