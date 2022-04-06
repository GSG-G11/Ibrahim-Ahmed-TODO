import React from 'react';
import './card.css';
const index = ({ id, title, description, createdAt, done }) => {
  return (
    <div>
      {id}- {title}
    </div>
  );
};

export default index;
