import React from 'react';
import Card from '../cards';
import './body.css';
const index = ({ notes }) => {
  return (
    <div>
      {notes.map(({ id, title, description, createdAt, done }) => {
        return (
          <Card
            key={id}
            id={id}
            title={title}
            description={description}
            createdAt={createdAt}
            done={done}
          />
        );
      })}
    </div>
  );
};

export default index;
