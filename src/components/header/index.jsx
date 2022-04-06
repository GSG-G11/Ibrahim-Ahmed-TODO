import React from 'react';
import './header.css';
const index = ({ openModalHandler }) => {
  return (
    <div>
      <button onClick={() => openModalHandler('CreateNotes')}>create</button>
      <button onClick={() => openModalHandler('UpdateNotes')}>edit</button>
    </div>
  );
};

export default index;
