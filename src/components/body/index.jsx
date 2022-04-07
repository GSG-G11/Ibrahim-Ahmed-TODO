import React from 'react';import Card from '../cards';
import './body.css';
import { motion } from 'framer-motion';
const index = ({
  notes,
  deleteCardHandler,
  openEditModalHandler,
  changeCompleted,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='tasks-list-body'>
      {notes.length !== 0 &&
        notes.map(({ id, title, description, createdAt, done }) => {
          return (
            <Card
              key={id}
              id={id}
              title={title}
              description={description}
              createdAt={createdAt}
              done={done}
              deleteCardHandler={deleteCardHandler}
              openEditModalHandler={openEditModalHandler}
              changeCompleted={changeCompleted}
            />
          );
        })}
      {notes.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='no-tasks'>
          You haven't got any notes yet!
        </motion.p>
      )}
    </motion.div>
  );
};

export default index;
