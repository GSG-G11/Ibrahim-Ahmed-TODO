import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import './card.css';
const index = ({
  id,
  title,
  description,
  createdAt,
  done,
  deleteCardHandler,
  openEditModalHandler,
  changeCompleted,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='card-card'>
      <div className='card-head'>
        <h2
          className={done ? 'completed__task' : ''}
          onClick={() => changeCompleted(id)}>
          {title}
        </h2>
        <div className='card-edit-delete'>
          <FontAwesomeIcon
            className='card-edit-btn'
            icon={faEdit}
            onClick={() =>
              openEditModalHandler('UpdateNotes', id, title, description)
            }
          />
          <FontAwesomeIcon
            className='card-delete-btn'
            icon={faTrash}
            onClick={() => deleteCardHandler(id)}
          />
        </div>
      </div>
      <div className='card-body-description'>
        <p className={done ? 'completed__task' : ''}>{description}</p>
      </div>
      <div className='card-footer'>{createdAt}</div>
    </motion.div>
  );
};

export default index;
