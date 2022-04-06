import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './modal.css';
const index = ({ children, isOpen, closeModalHandler }) => {
  const classModal = () => {
    return isOpen ? 'modal__show' : 'modal__hide';
  };

  return (
    <>
      <div
        className={`modal__background ${classModal()}`}
        onClick={closeModalHandler}></div>
      <div className={`modal__container ${classModal()}`}>
        <FontAwesomeIcon
          className='modal__close__btn'
          icon={faClose}
          style={{ marginRight: '0.5rem' }}
          onClick={closeModalHandler}
        />
        <div className={'modal__content'}>{children}</div>
      </div>
    </>
  );
};

export default index;
