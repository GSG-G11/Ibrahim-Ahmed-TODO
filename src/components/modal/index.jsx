import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './modal.css';
const index = ({ children, closeModalHandler }) => {
  return (
    <div>
      <div className='modal__background' onClick={closeModalHandler}></div>
      <div className='modal__container'>
        <FontAwesomeIcon
          className='modal__close__btn'
          icon={faClose}
          style={{ marginRight: '0.5rem' }}
          onClick={closeModalHandler}
        />
        <div className={'modal__content'}>{children}</div>
      </div>
    </div>
  );
};

export default index;
