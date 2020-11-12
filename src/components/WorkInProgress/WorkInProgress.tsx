import React from 'react';
import './WorkInProgress.css';

interface ContainerProps {
  name: string;
}

const WorkInProgress: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{"Development for " + name + " is a Work in Progress"}</strong>
    </div>
  );
};

export default WorkInProgress;
