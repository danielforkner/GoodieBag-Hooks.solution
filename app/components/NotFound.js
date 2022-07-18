import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  return <div>The page at {location.pathname} does not exist!</div>;
};

export default NotFound;
