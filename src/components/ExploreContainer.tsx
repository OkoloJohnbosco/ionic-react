import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  children: React.ReactNode | string;
}

const ExploreContainer: React.FC<ContainerProps> = ({children}) => {
  return <div className="container">{children}</div>;
};

export default ExploreContainer;
