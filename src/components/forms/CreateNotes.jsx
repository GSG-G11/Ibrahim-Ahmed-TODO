import React from 'react';import './form.css';

const CreateNotes = ({
  title,
  description,
  handleChange,
  handleCreateTodo,
}) => {
  return (
    <div className='container__modal__todo'>
      <h1 className='title__modal__todo'> Create ToDo </h1>
      <form className='form__group__todo'>
        <div className='form__input__todo'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={handleChange}
            placeholder='Enter Your Title...'
          />
        </div>
        <div className='form__input__todo'>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            name='description'
            value={description}
            onChange={handleChange}
            placeholder='Enter Your description...'>
            {description}
          </textarea>
        </div>

        <div className='form__input__todo'>
          <button
            className='btn__create__todo'
            type='button'
            onClick={handleCreateTodo}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNotes;
