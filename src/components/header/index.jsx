import React from 'react';
import './header.css';
const index = ({ openModalHandler }) => {
  return (
    <div className='header'>
      <h1>To Do App</h1>
      <div className='header-bottom'>
        <div className='date-day'>
          <h3 className='day'>sunday</h3>
          <p className='date'>26 jan 2022</p>
        </div>

        <div className='numTask'>
          <p>1 tasks</p>
        </div>
      </div>
      <button
        className='addTask'
        onClick={() => openModalHandler('CreateNotes')}>
        +
      </button>
    </div>
  );
};

export default index;
