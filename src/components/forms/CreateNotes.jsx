import React from 'react';

const CreateNotes = ({ title, description, handleChange, handleCreateTodo }) => {
  return (
    <>
      <div>
        <h1> Create Modal </h1>
        <form>
          <label>
            Title
            <input
              type='text'
              name='title'
              value={title}
              onKeyUp={handleChange}
            />
          </label>
          <label>
            Description
            <textarea
              name='description'
              value={description}
              onKeyUp={handleChange}>
              {description}
            </textarea>
          </label>

          <button type='button' onClick={handleCreateTodo}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateNotes;
