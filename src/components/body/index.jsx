import React from 'react';
import Card from '../cards';
import './body.css';
const index = ({ notes, deleteCardHnadler }) => {
  return (
    <div
     className='tasks-list-body'>
      {notes.map(({ id, title, description, createdAt, done }) => {
        return (
          <Card
            key={id}
            id={id}
            title={title}
            description={description}
            createdAt={createdAt}
            done={done}
            deleteCardHnadler={deleteCardHnadler}
          />
        );
      })}
    </div>
  );
};

export default index;
